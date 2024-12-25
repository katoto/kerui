import React from 'react';
import Img from '@/image/logo2.png';

import Pro1 from '@/image/product/1.png';
import Pro2 from '@/image/product/2.png';
import Pro3 from '@/image/product/3.png';
import Pro4 from '@/image/product/4.png';
import Pro5 from '@/image/product/5.png';
import Pro6 from '@/image/product/6.png';
import Pro7 from '@/image/product/7.png';
import Pro8 from '@/image/product/8.png';

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page llbyiegnx9a-editor_css' },
  logo: {
    className: 'header3-logo',
    children: Img,
    href: '/',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '/',
          children: [{ children: '首页', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '/timeline',
          children: [{ children: '发展历程', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '/about',
          children: [{ children: '关于我们', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: { className: 'banner2-title', children: '科锐电器' },
        content: {
          className: 'banner2-content',
          children: `从事煤矿电子产品的研制开发、生产、销售和服务为一体的创新企业。为您提供安全的矿用电器以及智能化解决方案的供应商。`,
        },
        button: { 
          style: { lineHeight: '28px', color: '#fff' }, 
          className: 'test',
          children: '了解更多',
          href: '/timeline',
          onClick: (e) => {
            e.preventDefault();
            window.location.href = '/timeline';
          },
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '研发和生产能力' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              style: {
                width: '70px',
                marginBottom: '30px'
              },
              children: <img style={{
                display: 'block',
                width: '100%'
              }} src="https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png" />,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '专业的研发团队',
            },
            { 
              name: 'content',
              children: '科锐电器深耕煤矿电器领域多年，产品均由资深矿用设备专家带头研发。' 
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              style: {
                width: '70px',
                marginBottom: '30px'
              },
              children: <img style={{
                display: 'block',
                width: '100%'
              }} src="https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png" />,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '经验丰富的技术工人',
            },
            {
              name: 'content',
              children: '公司有大量经验丰富的技术工人，十分熟悉产品生产流程，配合公司完善的规章制度，保证产品生产的高效和质量。'
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              style: {
                width: '70px',
                marginBottom: '30px'
              },
              children: <img style={{
                display: 'block',
                width: '100%'
              }} src="https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png" />,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '高效的生产设备',
            },
            {
              name: 'content',
              children: '公司是一线生产厂家，有完整的生产工艺，设备定期保养检修，保证产品生产的高效和质量。'
            },
          ],
        },
      },
    ],
  },
};
export const Feature60DataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: { className: 'feature6-title-text', children: '服务指标' },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '千' },
              toText: true,
              children: '1168',
            },
            children: { className: 'feature6-text', children: '服务用户' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万' },
              toText: true,
              children: '1.18',
            },
            children: { className: 'feature6-text', children: '产品销量数' },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万' },
              toText: true,
              children: '2.10',
            },
            children: { className: 'feature6-text', children: '模型样品数量' },
          },
        ],
      }
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '成熟产品案例', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '煤矿智能化和安全方案专家专注于煤矿智能化和安全, 从事煤矿电子产品的研制开发、生产、销售和服务为一体的创新企业',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: Pro1,
          },
          content: { children: '矿用通讯信号系列' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: Pro2,
          },
          content: { children: '声光语言报警器系列' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: Pro3,
          },
          content: { children: '皮带机保护及控制系列' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: Pro4,
          },
          content: { children: '扩播电话系列' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: Pro5,
          },
          content: { children: '洒水降尘控制系列' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: Pro6,
          },
          content: { children: '传感器系列' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: Pro7,
          },
          content: { children: '隔爆型LED照明系列' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: Pro8,
          },
          content: { children: '隔爆型LED照明系列' },
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '团队成员' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            { name: 'title', className: 'teams1-title', children: '张剑' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '执行董事兼总经理',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '宿州科锐电器有限公司执行董事兼总经理。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            { name: 'title', className: 'teams1-title', children: '张云飞' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '监事',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '宿州科锐电器有限公司监事。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            { name: 'title', className: 'teams1-title', children: '王玲' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '监事',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '宿州科锐电器有限公司监事。',
            },
          ],
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        Copyright © 2024
        <a href="https://beian.miit.gov.cn/">宿州科锐电器有限公司</a>
        All Rights Reserved
      </span>
    ),
  },
};
