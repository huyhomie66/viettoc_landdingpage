import "./styles.css";
import { Fragment } from "react";

import PriceBanner from './PriceBanner'

const price = {
    normal: [
        {
            price: { value: "0" },
            title: {
                value: "Khởi đầu",
                className: "price-normal-title",
            },
            description: [
                {
                    bold: "320 thành viên",
                    normal: "trong cây gia phả",
                },
                {
                    bold: "25 GB",
                    normal: "dung lượng lưu trữ",
                },
            ],
            button: {
                title: "Xem thêm",
                onClick: () => { },
                className: "price-normal-button",
            },
        },
        {
            price: { value: "4.000.000" },
            title: {
                value: "Cơ bản",
                className: "price-normal-title",
            },
            description: [
                {
                    bold: "200 thành viên",
                    normal: "trong cây gia phả",
                },
                {
                    bold: "20 GB",
                    normal: "dung lượng lưu trữ",
                },
            ],
            button: {
                title: "Xem thêm",
                onClick: () => { },
                className: "price-normal-button",
            },
        },
        {
            promotion: { value: "Phổ biến nhất" },

            price: { value: "5.000.000" },
            title: {
                value: "Đoàn viên",
                className: "price-normal-title",
            },
            description: [
                {
                    bold: "320 thành viên",
                    normal: "trong cây gia phả",
                },
                {
                    bold: "25 GB",
                    normal: "dung lượng lưu trữ",
                },
            ],
            button: {
                title: "Xem thêm",
                className: "price-normal-button",
                onclick: () => { },
            },
        },
    ],
    special: [
        {
            className: "special-1",
            price: { value: "15.000.000" },
            title: {
                value: "ĐỒNG TÂM",
            },
            description: [
                {
                    bold: "1000 thành viên",
                    normal: "trong cây gia phả",
                },
                {
                    bold: "100 GB",
                    normal: "dung lượng lưu trữ",
                },
            ],
            button: {
                title: "Xem thêm",
                className: "see-more-redPlum",
                onClick: () => { },
            },
        },
        {
            className: "special-2",
            promotion: {
                value: "Phổ biến nhất",
                className: "price-special-promotion",
            },
            price: {
                value: "50.000.000",
                className: "text-gold",
                unitClassName: "text-white",
            },
            title: {
                value: "THỊNH VƯỢNG",
                className: "text-gold",
            },
            description: [
                {
                    bold: "1000 thành viên",
                    normal: "trong cây gia phả",
                    className: "text-white",
                },
                {
                    bold: "100 GB",
                    normal: "dung lượng lưu trữ",
                    className: "text-white",
                },
            ],
            button: {
                title: "Xem thêm",
                className: "price-special-title",
                onClick: () => { },
            },
        },
        {
            className: "special-3",
            promotion: {
                value: "Đặc biệt",
                className: "price-special-promotion",
            },
            title: {
                value: "BẢN SẮC",
                className: "price-title-special",
            },
            description: [
                {
                    bold: "1000 thành viên",
                    normal: "trong cây gia phả",
                    className: "text-white",
                },
                {
                    bold: "100 GB",
                    normal: "dung lượng lưu trữ",
                    className: "text-white",
                },
            ],
            button: {
                title: "Liên hệ",
                className: "price-special-button",
                onClick: () => { },
            },
        },
    ],
};

const Promotions = () => (
    <Fragment>
        <div className="price-normal row">
            {price.normal.map((props, key) => (
                <PriceBanner {...props} key={key} />
            ))}
        </div>
        <div className="price-special">
            <div className="row">
                {price.special.map((props, key) => (
                    <PriceBanner {...props} key={key} />
                ))}
            </div>
        </div>
    </Fragment>
);


export default Promotions;
