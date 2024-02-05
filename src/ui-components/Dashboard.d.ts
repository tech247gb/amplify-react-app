/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DashboardOverridesProps = {
    Dashboard?: PrimitiveOverrideProps<FlexProps>;
    "Welcome to React App"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DashboardProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "breakpoint3" | "large" | "medium";
} & {
    overrides?: DashboardOverridesProps | undefined | null;
}>;
export default function Dashboard(props: DashboardProps): React.ReactElement;
