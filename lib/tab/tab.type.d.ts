import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
import { CSSProperties } from 'react';
export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: CSSProperties;
    source?: string;
    gaeaPreview?: boolean;
    tabNum?: number;
    activeTab?: number;
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
    style: {} & {
        opacity: number;
    };
    tabNum: number;
    activeTab: number;
}
export interface StateDefine {
    activeTab?: number;
}
export declare class State implements StateDefine {
}
