import React from 'react';
import {
  UserOutlined,
  BookOutlined,
  HomeOutlined,
  CommentOutlined,
  HeartOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

export const menus = [
  {
    key: '/',
    label: '首页',
    path: '/',
    icon: React.createElement(HomeOutlined),
  },
  {
    key: '/article',
    label: '文章',
    path: '',
    icon: React.createElement(BookOutlined),
    children: [
      { key: '/article/detail', label: '文章详情', path: '/article/detail' },
      { key: '/article/list', label: '文章列表', path: '/article/list' },
      { key: '/article/edit', label: '写文章', path: '/article/edit' },
    ],
  },
  {
    key: '/comment',
    label: '评论',
    path: '',
    icon: React.createElement(CommentOutlined),
    children: [
      { key: '/comment/list', label: '评论列表', path: '/comment/list' },
    ],
  },
  {
    key: '/like',
    label: '点赞',
    path: '',
    icon: React.createElement(HeartOutlined),
    children: [{ key: '/like/list', label: '点赞列表', path: '/like/list' }],
  },
  {
    key: '/user',
    label: '用户',
    path: '',
    icon: React.createElement(UserOutlined),
    children: [{ key: '/user/info', label: '用户中心', path: '/user/info' }],
  },
  {
    key: '/admin',
    label: 'admin',
    path: '',
    icon: React.createElement(UsergroupAddOutlined),
    children: [
      {
        key: '/admin/info/preview',
        label: '信息管理',
        path: '/admin/about/preview',
      },
      {
        key: '/admin/resume/list',
        label: '简历列表',
        path: '/admin/resume/list',
      },
      {
        key: '/admin/resume/edit',
        label: '编辑简历',
        path: '/admin/resume/edit',
      },
    ],
  },
];
