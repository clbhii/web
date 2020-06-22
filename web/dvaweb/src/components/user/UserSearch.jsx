import React, {  } from 'react';
import styles from './UserSearch.less';
import {Button, Form, Input, Col,Row} from 'antd';
function UserSearch({
                      form, field, keyword,
                      onSearch, onAdd}
                     ) {
  return (
    <div>
      <Form name="basic">
        <Row>
          <Col>
            <Form.Item
              label="Username"
              name="username"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item >
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>
              <Button type="ghost" onClick={onAdd}>
                添加
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default UserSearch;
