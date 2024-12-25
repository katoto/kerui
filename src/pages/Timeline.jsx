import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import Nav3 from '@/Home/Nav3';
import Footer0 from '@/Home/Footer0';
import { Nav30DataSource, Footer00DataSource } from '@/Home/data.source';
import { enquireScreen } from 'enquire-js';
import 'antd/dist/antd.css';
import './Timeline.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class TimelinePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    return (
      <div className="timeline-page">
        <Nav3
          id="Nav3_0"
          key="Nav3_0"
          dataSource={Nav30DataSource}
          isMobile={this.state.isMobile}
        />
        
        <div className="timeline-container">
          <h1>发展历程</h1>
          <Timeline mode="alternate">
            <Timeline.Item color="red">
              <h3>2021年</h3>
              <p>深耕矿用电器的自动化和智能化领域，研发并推出更多的智能化产品。</p>
            </Timeline.Item>
            
            <Timeline.Item color="green">
              <h3>2016年</h3>
              <p>全面导入ERP管理系统，同年成为上市企业阳光电源的合作供应商</p>
            </Timeline.Item>
            
            <Timeline.Item>
              <h3>2012年</h3>
              <p>公司建成700平方办公楼和5000平厂房，用于办公和生产。</p>
            </Timeline.Item>
            
            <Timeline.Item color="red">
              <h3>2011年</h3>
              <p>公司与宿州市招商局达成协议，在埇桥区工业聚集区内建立总部，占地13亩。</p>
            </Timeline.Item>
            
            <Timeline.Item>
              <h3>2008年</h3>
              <p>公司由行业精英成立，研发并生产矿用电器。</p>
            </Timeline.Item>
          </Timeline>

          <div className="company-info">
            <h2>宿州科锐电器有限公司</h2>
            <ul>
              <li>产品销往全国各地，质量稳定，深受各地矿务局和煤矿信赖。</li>
              <li>淮北矿务局近十年来一直采购到产品。</li>
              <li>作为上市企业阳光电源的合格供应商，年采购额超过千万。</li>
            </ul>
          </div>
        </div>

        <Footer0
          id="Footer0_0"
          key="Footer0_0"
          dataSource={Footer00DataSource}
          isMobile={this.state.isMobile}
        />
      </div>
    );
  }
} 