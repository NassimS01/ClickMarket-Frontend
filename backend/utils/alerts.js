import Swal from 'sweetalert2';

export const customAlert = (title, text, icon, buttonText, action) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: buttonText,
    confirmButtonColor: '#6D8B74',
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      action();
      return;
    }
  });
};

export const alertConfirmCancel = (
  title,
  text,
  icon,
  buttonConfirm,
  buttonCancel,
  action,
  actiontwo
) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    cancelButtonText: buttonCancel,
    confirmButtonColor: 'green',
    cancelButtonColor: '#BA1F1C',
    confirmButtonText: buttonConfirm,
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    } else {
      actiontwo();
    }
  });
};

export const validateUserAlert = (
  userData,
  id,
  token,
  action,
  actionTwo,
  actionThree,
  info
) => {
  Swal.fire({
    title: info.title,
    input: info.inputType,
    inputAttributes: {
      autocapitalize: 'off',
    },
    showCancelButton: true,
    cancelButtonText: info.cancelTextButton,
    confirmButtonText: info.textButton,
    confirmButtonColor: '#6D8B74',
    showLoaderOnConfirm: true,
    preConfirm: async (password) => {
      return await action(id, password, token)
        .then(async (response) => {
          if (!response) {
            throw new Error(response);
          }
          return await actionTwo(id, userData, token);
        })
        .catch((error) => {
          Swal.showValidationMessage(`${error}: ${info.errorMessage}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: info.successTitle,
        text: info.successText,
        confirmButtonText: info.successButtonText,
        confirmButtonColor: '#6D8B74',
      }).then(() => {
        actionThree();
      });
    }
  });
};

export const alertTime = (title, icon) => {
  Swal.fire({
    toast: true,
    icon: icon,
    title: title,
    position: "bottom",
    showConfirmButton: false,
    timer: 3000,
  });
};
