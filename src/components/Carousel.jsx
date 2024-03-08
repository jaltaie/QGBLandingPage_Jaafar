import React, { useCallback, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import course_image_1 from '../images/course_image_1.png';
import course_image_2 from "../images/course_image_2.png";
import course_image_3 from '../images/course_image_3.png';
import course_image_4 from '../images/course_image_4.png';
import course_image_5 from '../images/course_image_5.png';
import course_image_6 from '../images/course_image_6.png';
import course_image_7 from '../images/course_image_7.png';
import course_image_8 from '../images/course_image_8.png';
import course_image_9 from '../images/course_image_9.png';
import section_right_boxes from '../images/section1_right_boxes.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import "./Carousel.css";




let next = null;
let previous = null;
let countSlides = null;
let currentSlide = null;

function SampleNextArrow(props) {
    let { className, style, onClick } = props;
    className = className.replace("slick-disabled", "");
    if (!onClick) {
        onClick = next;
    }
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    let { className, style, onClick } = props;
    className = className.replace("slick-disabled", "");
    if (!onClick) {
        onClick = previous;
    }
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function CardSlide(props) {
    const { index, ...otherProps } = props;
    return (
        <Card key={index} className="slider-card shadow">
            <div className="dot">
                <div className="selected-dot"></div>
            </div>
            <div className="triangle"></div>
            <Card.Img variant="top" src={otherProps.cardImg} />
            <Card.Body className="text-start">
                <Card.Title>
                    <a href="javascript:void(0)">{otherProps.title}</a>
                </Card.Title>
                <Card.Text className="align-items-end">
                    {otherProps.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}


const Carousel = () => {
    countSlides = 9;
    currentSlide = 0;
    let sliderRef = useRef(null);
    next = useCallback(() => {
        console.log("Next")
        currentSlide += 1;
        if (currentSlide === countSlides) {
            currentSlide = 0;
        }
        sliderRef.slickGoTo(currentSlide);
    }, []);
    previous = useCallback(() => {
        console.log("Previous")
        currentSlide -= 1;
        if (currentSlide === -1) {
            currentSlide = countSlides - 1;
        }
        sliderRef.slickGoTo(currentSlide);
    }, []);

    const slides = [
        {
            cardImg: course_image_1,
            title: "مهارات الموارد البشرية",
            description: "تشمل إدارة الموظفين وتطوير القدرات البشرية والتوظيف."
        },
        {
            cardImg: course_image_2,
            title: "مهارات العلاقات العامة والاتصال",
            description: "تركز على بناء علاقات فعّالة مع الجمهور وتنظيم الاتصال الفعّال."
        },
        {
            cardImg: course_image_3,
            title: "مهارات نظم المعلومات",
            description: "تشمل إدارة المعلومات وتكنولوجيا المعلومات لتحسين العمليات الداخلية."
        },
        {
            cardImg: course_image_4,
            title: "مهارات الشؤون المالية والإدارية",
            description: "تعنى بإدارة الأمور المالية والإدارية لتحقيق أهداف الشركة بكفاءة."
        },
        {
            cardImg: course_image_5,
            title: "مهارات التخطيط والجودة والابتكار",
            description: "تركز على تخطيط الأنشطة وتحسين الجودة وتعزيز الابتكار في العمليات."
        },
        {
            cardImg: course_image_6,
            title: "مهارات التعاون الدولي",
            description: "تشمل قدرة التعاون والتنسيق مع فرق عالمية وفهم القضايا الثقافية."
        },
        {
            cardImg: course_image_7,
            title: "مهارات الرقابة والتدقيق",
            description: "تتعلق بمراقبة العمليات وضمان التميز من خلال التدقيق والفحص الدقيق."
        },
        {
            cardImg: course_image_8,
            title: "مهارات القانون والأنظمة",
            description: "تتعلق بفهم القوانين والأنظمة المتعلقة بالمجال الذي يعمل فيه الفرد."
        },
        {
            cardImg: course_image_9,
            title: "مهارات السكرتارية وإدارة المكاتب",
            description: "تتضمن إدارة المكاتب وتنظيم المهام الإدارية ودعم الإدارة بشكل فعّال."
        },
    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        centerPadding: "0",
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="slider-bg mb-5" id="section1">
                <Container fluid className="slider-header">
                    <Row className="mb-5 pb-5">
                        <Col className="text-center">
                            <h1 className="mb-4">
                                اكتشف ذاتك، ارتقِ بتطورك الشخصي والمهني
                            </h1>
                            <h2>معايير ومواصفات عالمية تساعدك في تحقيق طموحاتك المستقبلية</h2>
                        </Col>
                    </Row>
                    <Row className="slider-container">
                        <Col>
                            <div className="hr-line">
                            </div>
                            <Slider
                                ref={slider => {
                                    sliderRef = slider;
                                }}
                                {...settings}>
                                {slides.map((elem, index) => {
                                    return (
                                        <CardSlide index={index} cardImg={elem.cardImg}
                                            title={elem.title} description={elem.description} />
                                    )
                                })}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Carousel;
