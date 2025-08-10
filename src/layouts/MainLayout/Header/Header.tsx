import { Col, Row, List, Flex } from 'antd';
import { MenuProps } from 'antd/lib';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from '../../../components/Container';
import Logo from '../../../components/Logo';

import Toolbar from '../../../components/Toolbar';
import ThemeSwitcher from '../../../components/ThemeSwitcher';
import config from '../../../config';
import cookieUtils from '../../../utils/cookieUtils';

import { HeaderProps, MenuType } from './Header.type';
import * as Styled from './Header.styled';
import MobileMenu from '../../../components/Mobile/MobileMenu';


const Header = ({ role, navbar, menu, avatarUrl, status }: HeaderProps) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    // Re-render component when login with Google
    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== config.routes.public.home) return;

        navigate(config.routes.public.home);

    }, [location.search]);

    const transitionNavBar = () => {
        if (window.scrollY > 0) {
            setShow(true);
        } else setShow(false);
    };

    const items: MenuProps['items'] = [
        {
            label: <Link to={config.routes.student.profile}>Profile</Link>,
            key: config.routes.student.profile,
        },
        {
            label: role === 'TUTOR' && status === 'ACTIVE' ? <span style={{ fontWeight: '500' }}>My Schedule</span> : <Link to={config.routes.student.studySchedule}>My Schedule</Link>,
            key: 'my-schedule',
            children:
                role === 'TUTOR' && status === 'ACTIVE'
                    ? [
                        { key: config.routes.student.studySchedule, label: <Link to={config.routes.student.studySchedule}>Study Session</Link> },
                        { key: config.routes.tutor.teachingSchedule, label: <Link to={config.routes.tutor.teachingSchedule}>Teaching Session</Link> },
                    ]
                    : undefined,
        },
        {
            type: 'divider',
        },
        {
            label: (
                <Link to={config.routes.public.login} onClick={() => cookieUtils.clear()}>
                    Log Out
                </Link>
            ),
            key: config.routes.public.login,
        },
    ];

    // Add "Tutoring Details" link if the role is "TUTOR"
    if (role === 'TUTOR' && status === 'ACTIVE') {
        items.splice(1, 0, {
            label: <Link to={config.routes.tutor.profile}>Tutoring Info</Link>,
            key: config.routes.tutor.profile,
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);



    return (
        <Styled.Header $isScroll={show}>
            <Container>
                <Row align="middle" justify={'space-between'}>
                    <Styled.ColumnStyle lg={5}>
                        <Logo to={config.routes.public.home} />
                    </Styled.ColumnStyle>

                    <Col lg={16} md={0} sm={0} xs={0}>
                        <Styled.Navbar
                            split={false}
                            dataSource={navbar}
                            renderItem={(item: unknown) => {
                                const menuItem = item as MenuType;
                                return <List.Item key={menuItem.key}>{menuItem.label}</List.Item>;
                            }}
                        />
                    </Col>


                    {role ? (
                        <Col lg={3} md={0} sm={0} xs={0}>
                            <Flex gap={8} align="center">
                                <ThemeSwitcher />
                                <Toolbar
                                    menu={items}
                                    avatar={avatarUrl}
                                />
                            </Flex>
                        </Col>
                    ) : (
                        <Col lg={3} md={0} sm={0} xs={0}>
                            <Flex gap={8} align="center">
                                <ThemeSwitcher />
                                <Styled.NavbarLink to={config.routes.public.login}>
                                    Login
                                </Styled.NavbarLink>
                            </Flex>
                        </Col>
                    )}

                    <Col lg={0}>
                        <Flex gap={16}>
                            <ThemeSwitcher />
                            <MobileMenu menu={menu} />
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </Styled.Header>
    );
};

export default Header;