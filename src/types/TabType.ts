import type {FieldErrors, UseFormRegister, UseFormSetValue} from "react-hook-form";
import type {JSX} from "react";

export interface  FormValues {
    name: string;
    phone: string;
    width: string;
    height: number;
    type: string;
    profile: string;
    glass: string;
    additional: string;
    balconyType: string;
    glazingType: string;
    option: string;
}

export interface TabRenderProps {
    register: UseFormRegister<FormValues>;
    setValue: UseFormSetValue<FormValues>;
    errors: FieldErrors<FormValues>;
}

export interface TabDataItem {
    id: string;
    label: string;
    render: (props: TabRenderProps) => JSX.Element;
};