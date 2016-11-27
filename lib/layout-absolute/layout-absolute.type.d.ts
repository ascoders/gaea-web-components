import * as Layout from '../layout/layout.type';
export interface PropsDefine extends Layout.PropsDefine {
}
export declare class PropsGaea extends Layout.PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    style: any;
    onClick: () => void;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
