import React from 'react';
import Nav3 from '@/Home/Nav3';
import Footer0 from '@/Home/Footer0';
import { Nav30DataSource, Footer00DataSource } from '@/Home/data.source';
import { enquireScreen } from 'enquire-js';
import { CheckCircleOutlined, SafetyCertificateOutlined, CustomerServiceOutlined, RocketOutlined } from '@ant-design/icons';
import './About.less';

// 引入图片
import cncMachine from '@/image/about/cnc_machine.png';
import latheMachine from '@/image/about/lathe_machine.png';
import laserCutter from '@/image/about/laser_cutter.png';
import weldingMachine from '@/image/about/welding_machine.png';
import automaticWelder from '@/image/about/automatic_welder.png';
import highSpeedPress from '@/image/about/high_speed_press.png';
import bendingMachine from '@/image/about/bending_machine.png';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class AboutPage extends React.Component {
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
      <div className="about-page">
        <Nav3
          id="Nav3_0"
          key="Nav3_0"
          dataSource={Nav30DataSource}
          isMobile={this.state.isMobile}
        />
        
        <div className="about-container">
          <h1>关于我们</h1>
          
          <div className="company-intro">
            <div className="text-content">
              <h2>宿州科锐电器有限公司</h2>
              <p>我们致力于煤矿电器的研发、生产和销售，提供安全、智能的解决方案。</p>
              <p>凭借强大的研发团队和先进的生产设备，我们能够快速响应市场需求。</p>
              <p>持续创新，推动矿用电器的智能化发展，力求在行业中保持领先地位。</p>
            </div>
            <div className="company-features">
              <h3>我们的优势</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <CheckCircleOutlined style={{ fontSize: '50px', color: '#00796b' }} />
                  <h4>专业研发</h4>
                  <p>拥有强大的研发团队，快速响应客户需求。</p>
                </div>
                <div className="feature-item">
                  <SafetyCertificateOutlined style={{ fontSize: '50px', color: '#00796b' }} />
                  <h4>品质保证</h4>
                  <p>严格的质量管控体系，确保产品稳定可靠。</p>
                </div>
                <div className="feature-item">
                  <CustomerServiceOutlined style={{ fontSize: '50px', color: '#00796b' }} />
                  <h4>服务至上</h4>
                  <p>提供完善的技术支持和售后服务。</p>
                </div>
                <div className="feature-item">
                  <RocketOutlined style={{ fontSize: '50px', color: '#00796b' }} />
                  <h4>创新驱动</h4>
                  <p>持续创新，推动矿用电器智能化发展。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="equipment-section">
            <h3>我们的设备</h3>
            <div className="equipment-grid">
              <div className="equipment-item">
                <img src={cncMachine} alt="CNC数控加工中心" />
                <h4>CNC数控加工中心</h4>
                <p>用于加工产品的主体、外表面、隔爆面等。</p>
              </div>
              <div className="equipment-item">
                <img src={latheMachine} alt="数控车床" />
                <h4>数控车床</h4>
                <p>用于车床加工产品的主体、外表面、隔爆面等。</p>
              </div>
              <div className="equipment-item">
                <img src={laserCutter} alt="激光切割机" />
                <h4>激光切割机</h4>
                <p>用于切割加工产品的主体、孔位、配件等。</p>
              </div>
            </div>
          </div>

          <div className="small-equipment-section">
            <h3>其他设备</h3>
            <div className="small-equipment-grid">
              <div className="small-equipment-item">
                <img src={weldingMachine} alt="激光移动式电焊机" />
                <h4>激光移动式电焊机</h4>
                <p>用于焊接产品的主体、连接框等。</p>
              </div>
              <div className="small-equipment-item">
                <img src={automaticWelder} alt="自动焊接机" />
                <h4>自动焊接机</h4>
                <p>用于批量产品的自动焊接，加工产品的外表面。</p>
              </div>
              <div className="small-equipment-item">
                <img src={highSpeedPress} alt="高速冲床" />
                <h4>高速冲床</h4>
                <p>用于批量产品的冲压，加工产品的外表面。</p>
              </div>
              <div className="small-equipment-item">
                <img src={bendingMachine} alt="数控折弯机" />
                <h4>数控折弯机</h4>
                <p>用于产品的折弯，加工产品的主体。</p>
              </div>
            </div>
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