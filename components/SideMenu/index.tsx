import React from 'react';
import { HomeOutlined, MailOutlined, AlignLeftOutlined, ReadOutlined, FolderOutlined, QuestionCircleOutlined, NotificationOutlined, ProfileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Home', 'home', <HomeOutlined />),
  getItem('Pathogen', 'pathogen', <AlignLeftOutlined />),
  getItem('Resources', 'resources', <ReadOutlined />),
  getItem('Guides', 'guides', <FolderOutlined />),
  getItem('FAQs', 'faqs', <QuestionCircleOutlined />),
  getItem('Contact', 'contact', <NotificationOutlined />),
  getItem('Terms & conditions', 'terms', <ProfileOutlined />),
];

const SideMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
  };

  return (
    <Menu
      onClick={onClick}
      style={{ height: '93vh' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['home']}
      mode="inline"
      items={items}
    />
  );
};

export default SideMenu;
