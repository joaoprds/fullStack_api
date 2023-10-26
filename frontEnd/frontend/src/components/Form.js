import axios from "axios";
import React, {
    useEffect,
    useRef
} from "react";
import styled from "styled-components";
import {
    toast
} from "react-toastify";

const FormContainer = styled.form `
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div `
  display: flex;
  flex-direction: column;
`;

const Input = styled.input `
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label ``;

const Button = styled.button `
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({
    getUsers,
    onEdit,
    setOnEdit
}) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.name.value = onEdit.name;
            user.description.value = onEdit.description;
            user.color.value = onEdit.color;
            user.product_category.value = onEdit.product_category;
            user.price.value = onEdit.price;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.name.value ||
            !user.description.value ||
            !user.color.value ||
            !user.product_category ||
            !user.price.value
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
                .put("http://localhost:4000/products/" + onEdit.id, {
                    name: user.name.value,
                    description: user.description.value,
                    color: user.color.value,
                    product_category: user.product_category,
                    price: user.price.value
                })
                .then(({
                    data
                }) => toast.success(data))
                .catch(({
                    data
                }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:4000/products", {
                    name: user.name.value,
                    description: user.description.value,
                    color: user.color.value,
                    product_category: user.product_category,
                    price: user.price.value
                })
                .then(({
                    data
                }) => toast.success(data))
                .catch(({
                    data
                }) => toast.error(data));
        }

        user.name.value = "";
        user.description.value = "";
        user.color.value = "";
        user.product_category.value = "";
        user.price.value = "";

        setOnEdit(null);
        getUsers();
    };

    return ( <
        FormContainer ref = {
            ref
        }
        onSubmit = {
            handleSubmit
        } >
        <
        InputArea >
        <
        Label > Name < /Label> <
        Input name = "name" / >
        <
        /InputArea> <
        InputArea >
        <
        Label > Description < /Label> <
        Input name = "description" / >
        <
        /InputArea> <
        InputArea >
        <
        Label > Color < /Label> <
        Input name = "color" / >
        <
        /InputArea> <
        InputArea >
        <
        Label > Product category < /Label> <
        Input name = "product_category" / >
        <
        /InputArea> <
        InputArea >
        <
        Label > Price < /Label> <
        Input name = "price" / >
        <
        /InputArea>

        <
        Button type = "submit" > SALVAR < /Button> <
        /FormContainer>
    );
};

export default Form;