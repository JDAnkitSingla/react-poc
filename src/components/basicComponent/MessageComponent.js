import React from "react"
/**
 * Render Message Component
 */

import Message from "./Message"

const MessageComponent = () => (
  // While passing NUMBER, BOOLEAN, or that is not string,
  // we need to use {} for attribute value
  <Message msg="This is passed via param" color="olive" num={30} />
)

export default MessageComponent
