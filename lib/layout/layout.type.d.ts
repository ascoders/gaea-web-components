import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    onClick?: () => void;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    canDragIn: boolean;
    gaeaEdit: (string | {
        field: any;
        label: string;
        editor: string;
        editable: boolean;
    })[];
    gaeaEvent: {
        triggers: {
            name: string;
            type: string;
            selfCallback: boolean;
        }[];
        effects: ({
            name: string;
            type: string;
        } | {
            name: string;
            type: string;
            call: {
                functionName: string;
            };
        })[];
    };
}
export declare class Props extends PropsGaea implements PropsDefine {
    style: any;
    onClick: () => void;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
