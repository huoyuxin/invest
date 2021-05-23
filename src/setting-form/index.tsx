import { Component } from 'react'
import { Form, Input, Button, Select } from 'antd'

export default class SettingForm extends Component {
  onFinish() {
    alert('finish')
  }
  onFinishFailed() {
    alert('finish failed')
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <Form
        {...formItemLayout}
        name="basic"
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}>
        <Form.Item label="投入" name="tax" rules={[{ required: true }]}>
          <Input />
          万元
        </Form.Item>
        <Form.Item label="总房价" name="totalPrice" rules={[{ required: true }]}>
          <Input />
          万元
        </Form.Item>
        <Form.Item label="建筑面积" name="areaSize" rules={[{ required: true }]}>
          <Input />
          <span>平米</span>
        </Form.Item>
        <Form.Item label="税费" name="tax" rules={[{ required: true }]}>
          <Input />
          万元
        </Form.Item>
        <Form.Item label="服务费比例" name="service" rules={[{ required: true }]}>
          <Input />%
        </Form.Item>
        <Form.Item label="贷款利率" name="" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="还款方式" name="type">
          <Select>
            <Select.Option value="1">等额本金</Select.Option>
            <Select.Option value="2">等额本息</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="预期单价" name="totalPrice" rules={[{ required: true }]}>
          <Input />
          万元
        </Form.Item>
        <Form.Item label="预期月租" name="totalPrice">
          <Input />
          万元
        </Form.Item>
        <Form.Item label="预期时间范围" name="totalPrice">
          <Form.Item label="" name="totalPrice">
            <Input />
          </Form.Item>
          <Form.Item label="" name="type">
            <Select>
              <Select.Option value="1">年</Select.Option>
              <Select.Option value="2">月</Select.Option>
            </Select>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
