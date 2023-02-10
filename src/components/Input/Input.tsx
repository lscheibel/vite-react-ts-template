import React from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';
import cursorTextSvg from '../../assets/icons/cursor-text.svg';

export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    name: string;
    error?: string | undefined;
}

const Input = ({ label, name, error, className, ...props }: InputProps) => {
    return (
        <>
            <label htmlFor={name}>
                {label} <img src={cursorTextSvg} alt="" aria-hidden />
            </label>
            <input name={name} id={name} {...props} className={cn(styles.input, className)} />
            {error ? <span role="alert">{error}</span> : null}
        </>
    );
};

export default Input;
