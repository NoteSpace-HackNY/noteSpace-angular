import { User } from './user.model';

export class Workspace {
    id?: number;
    owner: User;
    title: string;
    members: User[];
}
