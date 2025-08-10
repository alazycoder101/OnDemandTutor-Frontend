import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #B94AB7;
        --secondary-color: #F4D1F3;
        --facebook-color: #1877F2;
        --info-color: #1677FF;
        --warning-color: #FAAD14;
        --success-color: #52C41A;
        --error-color: #FF0000;
        --grey-color: #CCC;
        --yellow-color: #FFCE3D;
        --blue-color: #1a73e8;
        --border-color: #BFBFBF;
        --textPrimary-color: rgba(0, 0, 0, 0.85);
        --textSecondary-color: rgba(0, 0, 0, 0.45);
        --textTertiary-color: #BCBCBC;
        --textQuaternary-color: #566363;
        --disabledPlaceholder-color: rgba(0, 0, 0, 0.25);
        --divider-color: rgba(5, 5, 5, 0.06);
        --hoverPrimary-color: rgba(240,81,35,.1);
        --hoverSecondary-color: #F1F1F1;
        --white-color: #FFF;
        --black-color: #000;
        --shadowForm-color: rgb(34 41 47 / 10%);
        --shadowCart-color: rgba(56, 56, 56, 0.06);
        --shadowDropdown-color: rgba(0, 0, 0, 0.02);
        --shadowCartHover-color: rgba(56, 56, 56, 0.07);
        --shadowPurchased-color: rgba(51, 56, 56, 0.06);
        --shadowPurchasedHover-color: rgba(51, 56, 56, 0.07);
        --shadowButton-color: rgba(0, 0, 0, 0.04);
        --overlayImage-color: rgba(106, 111, 119, 0.1);
        --borderDefault-color: #E5E5E5;
        --borderInput-color: #D9D9D9;
        --starIcon-color: #FADB14;
        --descTabBorder-color: #F0F0F0;
        --done-color: #1BC47D;
        --doneBackground-color: #A6E8CC;
        --processing-color: #FFC700;
        --processingBackground-color: #FFE99B;
        --incoming-color: #FF9500;
        --incomingBackground-color: #FFD59B;
        --cancel-color: #FF2942;
        --cancelBackground-color: #FFABB5;
        --pending-color: #BFBFBF;
        --pendingBackground-color: #E6E6E6;
        --borderSchedule-color: #EBEBEB;
        --toolbarBg-color: #F5F5F5;
        --adminBackground-color: #f8f9fa;
        --background-color: #FFF;
        --backgroundGradient-color: linear-gradient(213deg, #4209C9 0%, #FA6EAD 100%);
        --transition-primary: all 0.25s linear;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;
        background: var(--backgroundGradient-color);
        overflow: unset;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        color: var(--textPrimary-color);
        background-color: var(--background-color);

        ${({ theme }) => theme.breakpoints.down('md')} {
            -webkit-tap-highlight-color: transparent;
        }
    }

    border,
    input,
    [tabindex] {
        outline: none;
        border: none;
    }

    button {
        font-size: 1em;
        border: none;
    }

    a {
        font-weight: 500;
        color: var(--primary-color);
    }

    ul li a {
        text-decoration: none;
    }

    /* Scrollbar */
    ::-webkit-scrollbar {
        border-radius: 0;
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.15);
    }

    ::-webkit-scrollbar-track {
        border-radius: 0;
        background-color: rgba(0, 0, 0, 0);
    }

    /* Selection */
    ::selection {
        color: var(--white-color);
        background: var(--primary-color);
    }

    /* Custom styles */
    h1.ant-typography, h2.ant-typography, h3.ant-typography, h4.ant-typography, h5.ant-typography, h6.ant-typography {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    }

    /* Ant Design Components */
    .ant-btn {
        transition: var(--transition-primary);
    }

    .ant-btn-primary {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
    }

    .ant-btn-primary:hover,
    .ant-btn-primary:focus {
        background-color: var(--hoverPrimary-color);
        border-color: var(--primary-color);
        color: var(--primary-color);
    }

    .ant-btn-default {
        border-color: var(--border-color);
        color: var(--textPrimary-color);
    }

    .ant-btn-default:hover,
    .ant-btn-default:focus {
        border-color: var(--primary-color);
        color: var(--primary-color);
    }

    .ant-collapse {
        background-color: var(--white-color);
        border: 1px solid var(--border-color);
        border-radius: 4px;
    }

    .ant-collapse > .ant-collapse-item {
        border-bottom: 1px solid var(--border-color);
    }

    .ant-collapse > .ant-collapse-item:last-child {
        border-bottom: none;
    }

    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
        background-color: var(--white-color);
        color: var(--textPrimary-color);
    }

    .ant-collapse-content {
        background-color: var(--white-color);
        color: var(--textPrimary-color);
    }

    .ant-form-item-label > label {
        color: var(--textPrimary-color);
    }

    .ant-input,
    .ant-input-affix-wrapper,
    .ant-input-password,
    .ant-input-number,
    .ant-picker {
        border-color: var(--borderInput-color);
        color: var(--textPrimary-color);
        background-color: var(--white-color);
    }

    .ant-input:focus,
    .ant-input-affix-wrapper:focus,
    .ant-input-password:focus,
    .ant-input-number:focus,
    .ant-picker:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px var(--hoverPrimary-color);
    }

    .ant-input:hover,
    .ant-input-affix-wrapper:hover,
    .ant-input-password:hover,
    .ant-input-number:hover,
    .ant-picker:hover {
        border-color: var(--primary-color);
    }

    .ant-select-selector {
        border-color: var(--borderInput-color) !important;
        color: var(--textPrimary-color);
        background-color: var(--white-color) !important;
    }

    .ant-select-focused .ant-select-selector {
        border-color: var(--primary-color) !important;
        box-shadow: 0 0 0 2px var(--hoverPrimary-color) !important;
    }

    .ant-select:hover .ant-select-selector {
        border-color: var(--primary-color) !important;
    }

    .ant-select-dropdown {
        background-color: var(--white-color);
        border-color: var(--border-color);
    }

    .ant-select-item {
        color: var(--textPrimary-color);
    }

    .ant-select-item-option-active,
    .ant-select-item-option-selected {
        background-color: var(--hoverPrimary-color);
    }

    .ant-list-item {
        border-bottom: 1px solid var(--border-color);
        color: var(--textPrimary-color);
    }

    .ant-list-item:last-child {
        border-bottom: none;
    }

    .ant-card {
        background-color: var(--white-color);
        border: 1px solid var(--border-color);
        color: var(--textPrimary-color);
    }

    .ant-card-head {
        background-color: var(--white-color);
        border-bottom: 1px solid var(--border-color);
        color: var(--textPrimary-color);
    }

    .ant-tabs-tab {
        color: var(--textSecondary-color);
    }

    .ant-tabs-tab-active {
        color: var(--primary-color);
    }

    .ant-tabs-ink-bar {
        background-color: var(--primary-color);
    }

    .ant-radio-wrapper {
        color: var(--textPrimary-color);
    }

    .ant-checkbox-wrapper {
        color: var(--textPrimary-color);
    }

    .ant-alert {
        background-color: var(--white-color);
        border: 1px solid var(--border-color);
    }

    .ant-alert-info {
        border-color: var(--info-color);
    }

    .ant-alert-success {
        border-color: var(--success-color);
    }

    .ant-alert-warning {
        border-color: var(--warning-color);
    }

    .ant-alert-error {
        border-color: var(--error-color);
    }

    /* Change Autocomplete styles in Chrome*/
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: var(--textPrimary-color);
        -webkit-box-shadow: 0 0 0px 1000px var(--white-color) inset;
        transition: all 5000s ease-in-out 0s;
    }

    /* Shop Dropdown */
    .shop-dropdown {
        margin-top: 10px;

        & .ant-select-item {
            padding: 14px 12px;
        }

        & .ant-select-item-option-content {
            color: var(--textPrimary-color);
            font-size: 1.6rem;
        }
    }

   .usage  .ant-select-item-option-content {
         white-space: normal;
    }

    
`;

export default GlobalStyles;
