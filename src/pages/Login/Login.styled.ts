import { Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

export const LoginDesc = styled(Paragraph)`
    &.ant-typography {
        margin-bottom: 36px;
        color: var(--textSecondary-color);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.73333;
        text-align: center;

        a {
            margin: 0 4px;
            font-weight: 700;
            color: var(--textSecondary-color);
            transition: var(--transition-primary);

            span:first-child {
                font-size: inherit;
                color: var(--primary-color);
            }

            span:last-child {
                font-size: inherit;
                color: var(--primary-color);
            }

            &:hover {
                color: var(--primary-color);
            }
        }

        ${({ theme }) => theme.breakpoints.down('sm')} {
            font-size: 1.4rem;
        }
    }
`;
