const ErrosMessage = {
  USER_ALREADY_EXISTS: "User already exists",
  PRODUCT_ALREADY_EXISTS: "Product already exists",
  PRODUCT_NOT_LOCALIZED: "Product not found",
  USER_NOT_LOCATED: "User not located",
  DEFAULT_MESSAGE: "An error occurred when performing the transaction",
  PAYMENT_NOT_PROCESSED: "Could not process payment",
  UNAUTHORIZED_PAYMENT: "Payment authorization failed",
  PAYMENT_NOT_LOCATED: "Could not find payment",
  LIST_NOT_LOCALIZED: "List not found",
  NUMBER_OF_CPF_MUST_CONTAIN_DIGITS: "The number of CPF must contain 11 digits",
  ENTER_NUMBER_CPF_AND_EMAIL: "Please enter your phone number, CPF, and email address.",
  ENTER_VALID_NUMBER: "Enter a valid number",
  ENTER_PAGE_VALID: "Enter a valid page number",
  INFORM_NUMBER_CPF: "Inform the number of CPF",
  ITEMS_WITH_QUANTITY_ZEROED: "Items with quantity zeroed",
  NECESSARY_INCLUDE_ITEM: "Necessary to include at least one item",
  INVALID_NAME: "Name must not be empty",
  INVALID_DESCRIPTION: "Invalid description, too short, minimum 10 characters.",
  INVALID_NAME_LENGTH: "Invalid name, too short, minimum 5 characters.",
  INVALID_PRICE: "Price must be greater than 0",
  CATEGORY_ALREADY_EXISTS: "Category already exists",
  CATEGORY_NOT_FOUND: "Category not found",
  ORDERID_CANNOT_BE_EMPTY: "Order ID cannot be empty",
  AMOUNT_MUST_BE_GREATER_THAN_ZERO: "Amount must be greater than zero",
  INVALID_PAYMENT_STATUS: "Invalid payment status",
  INVALID_PAYMENT_FAILURE_STATUS: "Payment cannot be failed because it is not in pending status",
  PAYMENT_NOT_FOUND: "Payment not found",
  ORDER_NOT_FOUND: "Order not found",
  CURRENT_STATE_NOT_CHANGES:"Current order status does not allow changes"
} as const

export default ErrosMessage

