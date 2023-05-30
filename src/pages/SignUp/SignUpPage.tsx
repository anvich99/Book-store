import { FormAuth, Modal } from "components";

import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "store";
import { fetchSignUpUser } from "store/features/userInfo/userInfoSlice";
import { Template } from "templates";
import { AuthValues } from "types";

export const SignUpPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useAppDispatch();
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onSubmit: SubmitHandler<AuthValues> = (data) => {
    dispatch(fetchSignUpUser(data));
  };

  return (
    <Template>
      <div>SignUpPage</div>
      <FormAuth onSubmit={onSubmit} />
      {isOpen && <Modal handleClose={toggleModal} />}
    </Template>
  );
};
