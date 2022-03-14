import { FormGroup } from "@angular/forms";

export function usuarioSenhaIguaisValidator(FormGroup: FormGroup) {
    const userName = FormGroup.get('userName')?.value ?? '';
    const password = FormGroup.get('password')?.value ?? '';

    if (userName.trim() + password.trim()) {
        return userName !== password ? null : { senhaIgualUsuario: true };
    } else {
        return null;
    }
}