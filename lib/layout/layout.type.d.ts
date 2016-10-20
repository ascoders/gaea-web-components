import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    onClick?: () => void;
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
    gaeaEvent: {
        types: {
            name: string;
            type: string;
            selfCallback: boolean;
        }[];
        events: ({
            name: string;
            event: string;
        } | {
            name: string;
            event: string;
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
