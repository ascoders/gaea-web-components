import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
import { CSSProperties } from 'react';
export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: CSSProperties;
    source?: string;
    gaeaPreview?: boolean;
    show?: boolean;
    onOk?: () => void;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    canDragIn: boolean;
    gaeaEdit: (string | {
        field: string;
        label: string;
        editor: string;
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
    style: {} & {
        opacity: number;
    };
    show: boolean;
    onOk: () => void;
}
export interface StateDefine {
    show?: boolean;
}
export declare class State implements StateDefine {
    show: boolean;
}
