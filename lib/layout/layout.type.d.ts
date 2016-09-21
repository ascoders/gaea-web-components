import { TransparentlyPropsPropsDefine } from  'nt-transparently-props';
export interface PropsDefine extends TransparentlyPropsPropsDefine {
    width?: number;
    minWidth?: number;
    height?: number;
    minHeight?: number;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    flexWrap?: string;
    flexGrow?: number;
    background?: string;
    overflow?: string;
    overflowX?: string;
    overflowY?: string;
    paddingLeft?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    marginLeft?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
    gaeaEdit: ({
        field: string;
        label: string;
        type: string;
        editor: string;
        editable: boolean;
        notNullValue: number;
        canNull: boolean;
    } | {
        field: string;
        label: string;
        editor: string;
        editable: boolean;
        selector: {
            key: string;
            value: string;
        }[];
    } | {
        field: any;
        label: string;
        editor: string;
        editable: boolean;
    })[];
}
export declare class Props extends PropsGaea implements PropsDefine {
    display: string;
    flexGrow: any;
    height: number;
    minHeight: number;
    width: number;
    minWidth: number;
    justifyContent: string;
    alignItems: string;
    flexDirection: string;
    flexWrap: string;
    background: string;
    overflow: string;
    overflowX: any;
    overflowY: any;
    paddingLeft: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    marginLeft: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
