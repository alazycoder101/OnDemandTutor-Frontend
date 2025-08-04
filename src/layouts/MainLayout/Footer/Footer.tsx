import { Col, List, Row, Typography } from 'antd';
import Container from '../../../components/Container';
import Link from '../../../components/Link';
import { aboutUs, pages, socials } from './Footer.data';
import * as Styled from './Footer.styled';
import myTutor from '../../../assets/images/mytutor.png'
const { Title, Text } = Typography;
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const Footer = () => {
    const categoryList = [
        {
            id: 1,
            titleName: 'IELTS',
        },
        {
            id: 2,
            titleName: 'TOEIC',
        },
        {
            id: 3,
            titleName: 'MATHEMATICS',
        },
        {
            id: 4,
            titleName: 'CODING',
        },
    ]

    return (
        <>

            <Styled.FooterSection>
                <Container>
                    <Row gutter={24}>
                        <Col xl={5} lg={5} md={6} sm={12} xs={24}>
                            <Styled.MyTutorImage src={myTutor} />
                        </Col>

                        <Col xl={4} lg={4} md={5} sm={12} xs={24}>
                            <Styled.FooterColumnWrapper>
                                <Title level={2}>LEARN</Title>

                                <List
                                    itemLayout="vertical"
                                    dataSource={categoryList}
                                    renderItem={(category) => (
                                        <List.Item key={category.id}>
                                            <Styled.FooterSocialsLink to={'/search-questions'}>
                                                {category.titleName}
                                            </Styled.FooterSocialsLink>
                                        </List.Item>
                                    )}
                                />
                            </Styled.FooterColumnWrapper>
                        </Col>

                        <Col xl={4} lg={4} md={4} sm={12} xs={24}>
                            <Styled.FooterColumnWrapper>
                                <Title level={2}>PAGE</Title>

                                <List
                                    itemLayout="vertical"
                                    dataSource={pages}
                                    renderItem={(page) => (
                                        <List.Item key={page.key}>
                                            <Link to={page.to}>{page.title}</Link>
                                        </List.Item>
                                    )}
                                />
                            </Styled.FooterColumnWrapper>
                        </Col>

                        <Col xl={7} lg={7} md={9} sm={12} xs={24}>
                            <Styled.FooterColumnWrapper>
                                <Title level={2}>CONTACT</Title>

                                <List
                                    itemLayout="vertical"
                                    dataSource={aboutUs}
                                    renderItem={(about) => (
                                        <List.Item key={about.key}>
                                            <Link to={about.to} target={about.target}>
                                                {about.key === 2 ? <MailOutlined /> : <PhoneOutlined />} {about.title}
                                            </Link>
                                        </List.Item>

                                    )}
                                />
                            </Styled.FooterColumnWrapper>
                        </Col>

                        <Col xl={4} lg={4} md={24} sm={24} xs={24}>
                            <Styled.FooterSocials>
                                {socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <Link
                                            key={social.key}
                                            to={social.to}
                                            aria-label={social.label}
                                        >
                                            {Icon && <Icon size={20} />}
                                        </Link>
                                    );
                                })}
                            </Styled.FooterSocials>
                        </Col>
                    </Row>

                    <Styled.FooterRow align="middle" justify={'space-between'}>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <Styled.FooterCopyright>
                                <Text>
                                    @2025 Copyright All Rights Reserved
                                </Text>
                                <Text>
                                    Privacy Policy
                                </Text>
                                <Text>
                                    Legal Center
                                </Text>
                            </Styled.FooterCopyright>
                        </Col>


                    </Styled.FooterRow>
                </Container>
            </Styled.FooterSection>
        </>
    );
};

export default Footer;
