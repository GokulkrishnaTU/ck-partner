import React from 'react';
import {
  Button,
  Buttons,
  ContentWrapper,
  Date,
  ID,
  MainDiv,
  Pricing,
  Product,
  ProductDesc,
  RedText,
  Reject,
  Row,
  SelectReason,
  Status,
  TextLight,
} from './ConfirmationStyle';

const Confirmation = () => {
  return (
    <MainDiv>
      <ContentWrapper>
        <Row>
          <ID>ID</ID>
          <Product>Product</Product>
          <Date>Date of Submission</Date>
          <Pricing></Pricing>
          <Status></Status>
        </Row>
        <Row>
          <ID>123</ID>
          <Product>
            Mobile
            <ProductDesc>
              Lorem ipsum dolor sit amet consectetur. Sit nisl nisi tempor
              bibendum. Dignissim sollicitudin.
            </ProductDesc>
          </Product>
          <Date>21/10/2022</Date>
          <Pricing>
            Waiting for the Confirmation
            <TextLight>*we will send you a message within 30 mins</TextLight>
          </Pricing>
          <Status></Status>
        </Row>
        <Row>
          <ID>123</ID>
          <Product>
            Laptop
            <ProductDesc>
              Lorem ipsum dolor sit amet consectetur. Sit nisl nisi tempor
              bibendum. Dignissim sollicitudin.
            </ProductDesc>
          </Product>
          <Date>21/10/2022</Date>
          <Pricing>
            Rs 12500
            <TextLight>*Estimated cost</TextLight>
            <TextLight>
              Lorem ipsum dolor sit amet consectetur. At diam felis tincidunt in
              et mauris posuere. Tristique integer velit vehicula id iaculis
              eget dictum magna. Orci mi id eget tempus cursus sed fringilla ut.
              Aliquam sed tortor semper fringilla. Volutpat nisi facilisis
            </TextLight>
          </Pricing>
          <Status>
            <Buttons>
              <Button>Accept</Button>
              <Button>Postpond</Button>
            </Buttons>
            <SelectReason>
              <option value='select' selected>
                Select a reason for rejection
              </option>
              <option value='select'>Not enough money</option>
              <option value='select'>Bad</option>
            </SelectReason>
            '
            <br />
            <Reject>Reject</Reject>
          </Status>
        </Row>
        <Row>
          <ID>123</ID>
          <Product>
            Laptop
            <ProductDesc>
              Lorem ipsum dolor sit amet consectetur. Sit nisl nisi tempor
              bibendum. Dignissim sollicitudin.
            </ProductDesc>
          </Product>
          <Date>21/10/2022</Date>
          <Pricing>
            Rs 12500
            <TextLight>*Exchange cost</TextLight>
          </Pricing>
          <Status>
            <RedText>Rejected</RedText>
          </Status>
        </Row>
      </ContentWrapper>
    </MainDiv>
  );
};

export default Confirmation;
