import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
import { CSSProperties } from 'react';
export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: CSSProperties;
    source?: string;
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
    source: string;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
