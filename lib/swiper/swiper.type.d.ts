import { TransparentlyNativePropsPropsDefine } from  'nt-transparently-native-props';
import { CSSProperties } from 'react';
export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: CSSProperties;
    source?: string;
    dots?: boolean;
    autoPlay?: boolean;
    speed?: number;
    autoPlaySpeed?: number;
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
    } | {
        field: string;
        label: string;
        editor: string;
    })[];
}
export declare class Props extends PropsGaea implements PropsDefine {
    style: any;
    source: string;
    dots: boolean;
    autoPlay: boolean;
    speed: number;
    autoPlaySpeed: number;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
