import Input2 from 'src/shared/SignInInput/Index';
import { useController } from 'react-hook-form';

function InputReactHook(props: any) {
    const { field, fieldState } = useController(props);

    return (
        <Input2
            {...field}
            placeholder={props.label}
            hasError={fieldState.invalid}
            errorMessage={
                fieldState.error?.message || `${props.label} is required`
            }
            label={props.label}
            backgroundColor="#1E202A"
            type={props.type}
        />
    );
}

export default InputReactHook;
