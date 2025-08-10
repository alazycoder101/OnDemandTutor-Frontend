import { Button, Row } from 'antd';
import styled from 'styled-components';
import Link from '../../../components/Link';

export const FooterSection = styled.footer`
    padding: 60px 0;
    background-color: var(--white-color);
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const MyTutorImage = styled.img`
    padding: 60px 0;
    background-color: var(--white-color);
`;

export const FooterCTA = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 20px;

    & .ant-typography {
        margin-bottom: 0;
        color: var(--textPrimary-color);
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: -0.3px;
    }
`;

export const FooterButton = styled(Button)`
    --height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;
    min-width: 130px;
    height: var(--height);
    line-height: var(--height);
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--white-color);
        border-radius: 6px;
        transform: scaleX(0);
        transition: var(--transition-primary);
    }

    & span {
        position: relative;
        color: var(--white-color);
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 1.5;
        transition: var(--transition-primary);
    }

    &:hover::before {
        transform: scaleX(1);
    }

    &:hover span {
        color: var(--primary-color);
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        width: 100%;
    }
`;

export const FooterColumnWrapper = styled.div`
    & h2.ant-typography {
        margin-bottom: 20px;
        color: var(--primary-color);
    }

    & li.ant-list-item {
        padding: 0 0 20px 0;
        border: none;

        & a {
            color: var(--primary-color);
            font-size: 1.6rem;
            font-weight: 400;
            text-align: left;
            letter-spacing: -0.205px;
        }
    }
`;

export const FooterRow = styled(Row)`
    ${({ theme }) => theme.breakpoints.down('md')} {
        flex-direction: column-reverse;
    }
`;

export const FooterCopyright = styled.div`
    margin-top: 80px;
    text-align: center;

    & span.ant-typography {
        color: var(--primary-color);
        font-size: 1.6rem;
        font-weight: 400;
        letter-spacing: -0.205px;
        margin-right: 20px;
    }
    & span.ant-typography:last-child {
        margin-right: 0;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        margin-top: 20px;
        text-align: center;
    }
`;

export const FooterSocials = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    column-gap: 32px;

    & a {
        display: flex;
        padding: 8px;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        border-radius: 999px;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        justify-content: center;
        margin-top: 60px;
    }
`;

export const FooterSocialsLink = styled(Link)`
    display: -webkit-box;
    -webkit-line-clamp: var(--line-clamp, 1);
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
