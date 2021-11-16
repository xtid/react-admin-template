import React from 'react'
import { Layout, Divider } from 'antd'
import Icon, {
  SyncOutlined,
  SmileOutlined,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
  StepBackwardOutlined,
  StepForwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
  QuestionOutlined,
  QuestionCircleOutlined,
  PlusOutlined,
  PlusCircleOutlined,
  PauseOutlined,
  PauseCircleOutlined,
  MinusOutlined,
  MinusCircleOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
  EditOutlined,
  FormOutlined,
  CopyOutlined,
  ScissorOutlined,
  DeleteOutlined,
  SnippetsOutlined,
  DiffOutlined,
  HighlightOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  IeOutlined,
  ChromeOutlined,
  GithubOutlined,
  AliwangwangOutlined,
  DingdingOutlined,
  TaobaoCircleOutlined,
  TwitterOutlined,
} from '@ant-design/icons'

import CustomBreadcrumb from '../../../components/layout/custom-breadcrumb'

import './index.scss'

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
)

const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
      p-id="1143"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
      p-id="1144"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
      p-id="1145"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
      p-id="1146"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
      p-id="1147"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
      p-id="1148"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1149"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1150"
    />
  </svg>
)

const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />

const PandaIcon = (props) => <Icon component={PandaSvg} {...props} />

const IconView = () => {
  return (
    <Layout className="icon animated fadeIn">
      <div>
        <CustomBreadcrumb arr={['通用', '图标']}></CustomBreadcrumb>
      </div>

      <div className="base-style">
        <h3>何时使用</h3>
        <Divider />
        <p>语义化的矢量图形。</p>
      </div>

      <div className="base-style">
        <ul className="anticons-list">
          <li>
            <SyncOutlined spin />
          </li>
          <li>
            <SmileOutlined spin />
          </li>
          <li>
            <SmileTwoTone spin />
          </li>
          <li>
            <HeartTwoTone twoToneColor="#eb2f96" spin />
          </li>
          <li>
            <CheckCircleTwoTone twoToneColor="#52c41a" spin />
          </li>

          <li>
            <HeartIcon style={{ color: 'hotpink' }} />
            <PandaIcon style={{ fontSize: '32px' }} />
          </li>
        </ul>
      </div>
      <div className="base-style">
        <h3>方向性图标</h3>
        <Divider />
        <ul className="anticons-list">
          <li>
            <StepBackwardOutlined />
          </li>
          <li>
            <StepForwardOutlined />
          </li>
          <li>
            <FastBackwardOutlined />
          </li>
          <li>
            <FastForwardOutlined />
          </li>
          <li>
            <ShrinkOutlined />
          </li>
          <li>
            <ArrowsAltOutlined />
          </li>
          <li>
            <DownOutlined />
          </li>
          <li>
            <UpOutlined />
          </li>
          <li>
            <LeftOutlined />
          </li>
          <li>
            <RightOutlined />
          </li>
        </ul>
      </div>

      <div className="base-style">
        <h3>提示建议性图标</h3>
        <Divider />
        <ul className="anticons-list">
          <li>
            <QuestionOutlined />
          </li>
          <li>
            <QuestionCircleOutlined />
          </li>
          <li>
            <PlusOutlined />
          </li>
          <li>
            <PlusCircleOutlined />
          </li>
          <li>
            <PauseOutlined />
          </li>
          <li>
            <PauseCircleOutlined />
          </li>
          <li>
            <MinusOutlined />
          </li>
          <li>
            <MinusCircleOutlined />
          </li>
          <li>
            <PlusSquareOutlined />
          </li>
          <li>
            <MinusSquareOutlined />
          </li>
        </ul>
      </div>

      <div className="base-style">
        <h3>编辑类图标</h3>
        <Divider />
        <ul className="anticons-list">
          <li>
            <EditOutlined />
          </li>
          <li>
            <FormOutlined />
          </li>
          <li>
            <CopyOutlined />
          </li>
          <li>
            <ScissorOutlined />
          </li>
          <li>
            <DeleteOutlined />
          </li>
          <li>
            <SnippetsOutlined />
          </li>
          <li>
            <DiffOutlined />
          </li>
          <li>
            <HighlightOutlined />
          </li>
          <li>
            <AlignLeftOutlined />
          </li>
          <li>
            <AlignRightOutlined />
          </li>
        </ul>
      </div>

      <div className="base-style">
        <h3>品牌和标识</h3>
        <Divider />
        <ul className="anticons-list">
          <li>
            <AndroidOutlined />
          </li>
          <li>
            <AppleOutlined />
          </li>
          <li>
            <WindowsOutlined />
          </li>
          <li>
            <IeOutlined />
          </li>
          <li>
            <ChromeOutlined />
          </li>
          <li>
            <GithubOutlined />
          </li>
          <li>
            <AliwangwangOutlined />
          </li>
          <li>
            <DingdingOutlined />
          </li>
          <li>
            <TaobaoCircleOutlined />
          </li>
          <li>
            <TwitterOutlined />
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default IconView
