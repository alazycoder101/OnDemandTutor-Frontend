import { Typography, Form, Button, Carousel, Image, Row } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

import Link from '../../components/Link';

const { Title, Text } = Typography;

export const AuthForm = styled.div`
    display: flex;
    position: fixed;
    inset: 0;
    overflow-y: auto;
    background: linear-gradient(213deg, #4209c9 0%, #fa6ead 100%);
`;

export const FormRow = styled(Row)`
    margin: auto;
    position: relative;
    width: 1066px;
    height: 700px;
    padding: 24px;
    border-radius: 30px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 24px 0 ${({ theme }) => theme.colors.shadowForm};

    ${({ theme }) => theme.breakpoints.down('lg')} {
        width: auto;
        margin: auto;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        width: 100%;
        border-radius: unset;
        box-shadow: unset;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
        padding: 12px;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    margin: 0 auto;

    ${({ theme }) => theme.breakpoints.down('sm')} {
        width: 100%;
    }
`;

export const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    row-gap: 55px;
`;

export const FormTitle = styled(Title)`
    &.ant-typography {
        margin-bottom: 24px;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 3.6rem;
        font-weight: 700;
        text-align: center;
    }
`;

export const FormItem = styled(Form.Item)`
    &.ant-form-item {
        margin-bottom: 0;
    }

    &.ant-form-item:last-child {
        ${({ theme }) => theme.breakpoints.down('xs')} {
            margin-top: 28px;
        }
    }

    & .ant-form-item-row {
        position: relative;

        &:has(.ant-form-item-explain-error:not(:empty)) .ant-form-item-label label {
            color: ${({ theme }) => theme.colors.error};
        }

        &:has(input:-webkit-autofill),
        &:has(input:-webkit-autofill:hover),
        &:has(input:-webkit-autofill:focus),
        &:has(input:not(:placeholder-shown)),
        &:has(input:focus) {
            & .ant-form-item-label {
                top: -2px;
                left: 10px;
                padding: 0 10px;
                background-color: ${({ theme }) => theme.colors.white};
            }

            & label {
                color: ${({ theme }) => theme.colors.primary};
            }
        }
    }

    & .ant-form-item-label {
        position: absolute;
        z-index: 10;
        top: 58%;
        left: 20px;
        transform: translateY(-50%);
        padding: 0;
        user-select: none;
        pointer-events: none;
        transition: ${({ theme }) => theme.transition.primary};

        & label {
            color: ${({ theme }) => theme.colors.textSecondary};
            font-size: 1.6rem;
            font-weight: 400;

            &::after {
                display: none;
            }
        }
    }

    & .ant-form-item-control {
        position: relative;

        & .ant-form-item-control-input + div {
            position: absolute;
            top: 100%;
            left: 0;
        }
    }

    & .ant-input,
    & .ant-input-number-input,
    & .ant-input-password {
        padding: 12px 20px;
        font-size: 1.6rem;
        border-radius: 25px;
        border-color: ${({ theme }) => theme.colors.border};

        &:hover,
        &:focus {
            border-color: ${({ theme }) => theme.colors.primary};
        }
    }

    & .ant-form-item-explain-error {
        margin-top: 2px;
        color: ${({ theme }) => theme.colors.error};
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.6;
    }
`;
export const FormItemOTP = styled(Form.Item)`
    &.ant-form-item {
        margin-bottom: 0;
    }

    &.ant-form-item:last-child {
        ${({ theme }) => theme.breakpoints.down('xs')} {
            margin-top: 28px;
        }
    }

    & .ant-form-item-row {
        position: relative;

        &:has(.ant-form-item-explain-error:not(:empty)) .ant-form-item-label label {
            color: ${({ theme }) => theme.colors.error};
        }

        &:has(input:-webkit-autofill),
        &:has(input:-webkit-autofill:hover),
        &:has(input:-webkit-autofill:focus),
        &:has(input:not(:placeholder-shown)),
        &:has(input:focus) {
            & .ant-form-item-label {
                top: -2px;
                left: 10px;
                padding: 0 10px;
                background-color: ${({ theme }) => theme.colors.white};
            }

            & label {
                color: ${({ theme }) => theme.colors.primary};
            }
        }
    }

    & .ant-form-item-label {
        position: absolute;
        z-index: 10;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        padding: 0;
        user-select: none;
        pointer-events: none;
        transition: ${({ theme }) => theme.transition.primary};

        & label {
            color: ${({ theme }) => theme.colors.textSecondary};
            font-size: 1.6rem;
            font-weight: 400;

            &::after {
                display: none;
            }
        }
    }

    & .ant-form-item-control {
        position: relative;

        & .ant-form-item-control-input + div {
            position: absolute;
            top: 100%;
            left: 0;
        }
    }

    & .ant-input,
    & .ant-input-number-input,
    & .ant-input-password {
        padding: 12px 20px;
        font-size: 1.6rem;
        border: none;
        border-radius: 0;
        border-bottom: 2px solid ${({ theme }) => theme.colors.border};
        &:hover,
        &:focus {
            border-color: ${({ theme }) => theme.colors.primary};
        }
    }

    & .ant-form-item-explain-error {
        margin-top: 2px;
        color: ${({ theme }) => theme.colors.error};
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.6;
    }
`;

export const FormIcon = css`
    & svg {
        font-size: 2rem;
        transition: ${({ theme }) => theme.transition.primary};
    }

    &:hover svg {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const EyeOutlinedIcon = styled(EyeOutlined)`
    ${FormIcon}
`;

export const EyeInvisibleOutlinedIcon = styled(EyeInvisibleOutlined)`
    ${FormIcon}
`;

export const FormButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    border-radius: 6px;
    & span {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 0.18px;
    }

    & svg {
        font-size: 2rem;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.primary};
        opacity: 0.9;
    }
`;

export const FormButtonResendCode = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    height: 50px;
    border-radius: 6px;
    & span {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 0.18px;
    }

    & svg {
        font-size: 2rem;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.primary};
        opacity: 0.9;
    }
`;

export const FormGoogleButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    column-gap: 6px;
    margin-top: 24px;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    transition: ${({ theme }) => theme.transition.primary};

    & span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 1.6rem;
        transition: ${({ theme }) => theme.transition.primary};
    }

    & svg {
        font-size: 2.4rem;
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};

        & span {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const FormRedirect = styled(Text)`
    display: flex;
    align-items: center;
    justify-content: center;

    column-gap: 8px;
    margin-top: 36px;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.8rem;
`;

export const FormForgotPassword = styled(Link)`
    display: block;
    margin: 12px auto;
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.textSecondary};

    &:hover {
        color: ${({ theme }) => theme.colors.textPrimary};
    }
`;

export const FormCarousel = styled(Carousel)`
    width: 100%;
    height: 652px;
    border-radius: 6px;
    overflow: hidden;
    user-select: none;
`;

export const FormImageWrapper = styled.div`
    position: relative;
`;

export const FormImageOverlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    height: 100%;
    background: ${({ theme }) => theme.colors.overlayImage};
`;

export const FormImage = styled(Image)`
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
`;
