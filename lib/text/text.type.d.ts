import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    text?: string;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    gaeaEdit: (string | {
        field: any;
        label: string;
        editor: string;
        editable: boolean;
    })[];
}
export declare class Props extends PropsGaea implements PropsDefine {
    style: any;
    text: string;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
