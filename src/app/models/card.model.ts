import { Workspace } from './workspace.model';
export class Card {
    workspace: number;
    front: string;
    back: string;
    last_edit: Date;
    locked: boolean;
}
