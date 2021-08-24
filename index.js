import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Popover, Button } from 'antd';

const content = (
  <>
    <p>Content</p>
    <p>Content</p>
  </>
);

ReactDOM.render(
  <>
    <Popover
      style={{ width: '20px' }}
      placement="topLeft"
      title=""
      tigger={'click'}
      align={{
        offset: [0, 10]
      }}
      trigger="click"
      overlayClassName="self"
      content={content}
    >
      <Button>Align edge / 边缘对齐</Button>
    </Popover>
    <Popover
      align={{
        offset: [0, 10]
      }}
      title=""
      content={content}
      arrowPointAtCenter
    >
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Popover>
  </>,
  document.getElementById('container')
);
