import { DataTypes, Model } from 'sequelize';
import instance from '../../db';

class Client extends Model {
    id!: number;
    name!: string;
    email!: string;
    tags!: string;

    get tagsArray(): string[] {
        return this.tags.split(';');
    }

    set tagsArray(val: string[]) {
        this.tags = val.join(';');
    }

    toJSON() {
        const values = Object.assign({}, this.get());
        values.tags = this.tagsArray;

        return values;
    }
}

Client.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: instance,
    tableName: 'clients',
    timestamps: false,
});

export default Client;
