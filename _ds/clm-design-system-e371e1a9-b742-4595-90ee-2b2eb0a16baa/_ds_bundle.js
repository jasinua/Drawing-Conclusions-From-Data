/* @ds-bundle: {"format":4,"namespace":"CLMDesignSystem_e371e1","components":[{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"CustomStatsCard","sourcePath":"components/display/CustomStatsCard.jsx"},{"name":"EmptyState","sourcePath":"components/display/EmptyState.jsx"},{"name":"ListCard","sourcePath":"components/display/ListCard.jsx"},{"name":"StatsCard","sourcePath":"components/display/StatsCard.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"DateRangeInput","sourcePath":"components/forms/DateRangeInput.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"FilterSelect","sourcePath":"components/forms/Select.jsx"},{"name":"Tag","sourcePath":"components/forms/Tag.jsx"},{"name":"ColorMap","sourcePath":"components/forms/Tag.jsx"},{"name":"StatusTag","sourcePath":"components/forms/Tag.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"UploadFile","sourcePath":"components/forms/UploadFile.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/AppHeader.jsx"},{"name":"PageHeader","sourcePath":"components/navigation/PageHeader.jsx"},{"name":"SearchFilterBar","sourcePath":"components/navigation/SearchFilterBar.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"ConfirmDeletePopup","sourcePath":"components/overlay/ConfirmDeletePopup.jsx"},{"name":"CloseButton","sourcePath":"components/overlay/Popup.jsx"},{"name":"Popup","sourcePath":"components/overlay/Popup.jsx"},{"name":"Toast","sourcePath":"components/overlay/Toast.jsx"}],"sourceHashes":{"components/core/Icon.jsx":"5c9a0adfc891","components/data/Pagination.jsx":"7bcae30ac393","components/data/Table.jsx":"7e9670319a4d","components/display/CustomStatsCard.jsx":"a42c39769938","components/display/EmptyState.jsx":"39863cd35702","components/display/ListCard.jsx":"ce1204f2aa30","components/display/StatsCard.jsx":"3ea6a441f640","components/forms/Button.jsx":"702b3a16b635","components/forms/Checkbox.jsx":"925de7f169a0","components/forms/DateRangeInput.jsx":"788abf2ade08","components/forms/Input.jsx":"8f4bd5dbe48e","components/forms/Select.jsx":"838bbf32b400","components/forms/Tag.jsx":"01e5c7cfdd1c","components/forms/Toggle.jsx":"3d87f897dc4e","components/forms/UploadFile.jsx":"065099d0c7ce","components/navigation/AppHeader.jsx":"4ec5dd243205","components/navigation/PageHeader.jsx":"508d4225a183","components/navigation/SearchFilterBar.jsx":"c48676d99cb0","components/navigation/SideNav.jsx":"f6f654adaf2e","components/navigation/Sidebar.jsx":"4a5f8349d47f","components/overlay/ConfirmDeletePopup.jsx":"c474d51d2221","components/overlay/Popup.jsx":"88fa47fc1f47","components/overlay/Toast.jsx":"a1891a174f09","ui_kits/clm-admin/ClmAdminApp.jsx":"718f65fcc9c1","ui_kits/clm-admin/TemplateGroupDetail.jsx":"acc6c52d533d","ui_kits/clm-admin/TemplateRuleDetail.jsx":"f94eb3effcfa","ui_kits/clm-admin/data.js":"9d738f26d973","ui_kits/signing-portal/SigningPortalApp.jsx":"a37716723159"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CLMDesignSystem_e371e1 = window.CLMDesignSystem_e371e1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
/* Real TkIcon SVGs (tenantkey-ui-components/src/components/TkIcon/icons). Strokes recolored to currentColor like TkIcon does at mount. */
const ICONS = {
  "alert-circle": ["0 0 24 24", "<path d=\"M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "alert-triangle": ["0 0 20 20", "<g id=\"alert-triangle\"> <path id=\"Icon\" d=\"M9.99982 7.49995V10.8333M9.99982 14.1666H10.0081M8.84591 3.24305L1.99184 15.0819C1.61167 15.7386 1.42159 16.0669 1.44968 16.3364C1.47419 16.5714 1.59733 16.785 1.78846 16.924C2.00759 17.0833 2.38698 17.0833 3.14575 17.0833H16.8539C17.6127 17.0833 17.992 17.0833 18.2112 16.924C18.4023 16.785 18.5254 16.5714 18.55 16.3364C18.578 16.0669 18.388 15.7386 18.0078 15.0819L11.1537 3.24305C10.7749 2.58875 10.5855 2.26159 10.3384 2.15172C10.1229 2.05587 9.87678 2.05587 9.66123 2.15172C9.41413 2.26159 9.22472 2.58875 8.84591 3.24305Z\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g>"],
  "approved-circle": ["0 0 24 24", "<path d=\"M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "arrow-up": ["0 0 16 16", "<path d=\"M8.00065 12.6666V3.33325M8.00065 3.33325L3.33398 7.99992M8.00065 3.33325L12.6673 7.99992\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "bell-02": ["0 0 24 24", "<path d=\"M14 21h-4m8-13A6 6 0 1 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.732.099 1.928.099H18.61c1.196 0 1.795 0 1.927-.098.147-.11.186-.179.2-.361.014-.165-.353-.755-1.088-1.936C18.78 13.206 18 11.09 18 8Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "building-06": ["0 0 24 24", "<path d=\"M11 11H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 12.52 3 13.08 3 14.2V21m18 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 3 18.92 3 17.8 3h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C11 4.52 11 5.08 11 6.2V21m11 0H2M14.5 7h3m-3 4h3m-3 4h3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "calendar": ["0 0 20 20", "<path d=\"M17.5 8.33329H2.5M13.3333 1.66663V4.99996M6.66667 1.66663V4.99996M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8211 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7334 17.5 14.3333V7.33329C17.5 5.93316 17.5 5.2331 17.2275 4.69832C16.9878 4.22791 16.6054 3.84546 16.135 3.60578C15.6002 3.33329 14.9001 3.33329 13.5 3.33329H6.5C5.09987 3.33329 4.3998 3.33329 3.86502 3.60578C3.39462 3.84546 3.01217 4.22791 2.77248 4.69832C2.5 5.2331 2.5 5.93316 2.5 7.33329V14.3333C2.5 15.7334 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8211 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "check-circle": ["0 0 20 20", "<g clip-path=\"url(#clip0_4525_34711)\"> <path d=\"M6.25033 9.99984L8.75033 12.4998L13.7503 7.49984M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> <defs> <clipPath id=\"clip0_4525_34711\"> <rect width=\"20\" height=\"20\" fill=\"white\"></rect> </clipPath> </defs>"],
  "check": ["0 0 24 24", "<path d=\"M20 6 9 17l-5-5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "chevron-down": ["0 0 24 24", "<path d=\"m6 9 6 6 6-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "chevron-left": ["0 0 24 24", "<path d=\"m15 18-6-6 6-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "chevron-right": ["0 0 24 24", "<path d=\"m9 18 6-6-6-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "chevron-up": ["0 0 24 24", "<path d=\"m18 15-6-6-6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "clipboard": ["0 0 20 20", "<g id=\"clipboard\"> <path id=\"Icon\" d=\"M13.333 3.33341C14.108 3.33341 14.4955 3.33341 14.8134 3.4186C15.6761 3.64977 16.35 4.32364 16.5812 5.18637C16.6663 5.50428 16.6663 5.89177 16.6663 6.66675V14.3334C16.6663 15.7335 16.6663 16.4336 16.3939 16.9684C16.1542 17.4388 15.7717 17.8212 15.3013 18.0609C14.7665 18.3334 14.0665 18.3334 12.6663 18.3334H7.33301C5.93288 18.3334 5.23281 18.3334 4.69803 18.0609C4.22763 17.8212 3.84517 17.4388 3.60549 16.9684C3.33301 16.4336 3.33301 15.7335 3.33301 14.3334V6.66675C3.33301 5.89177 3.33301 5.50428 3.41819 5.18637C3.64936 4.32364 4.32323 3.64977 5.18596 3.4186C5.50388 3.33341 5.89136 3.33341 6.66634 3.33341M7.99967 5.00008H11.9997C12.4664 5.00008 12.6997 5.00008 12.878 4.90925C13.0348 4.82936 13.1623 4.70188 13.2422 4.54507C13.333 4.36681 13.333 4.13346 13.333 3.66675V3.00008C13.333 2.53337 13.333 2.30002 13.2422 2.12176C13.1623 1.96495 13.0348 1.83747 12.878 1.75758C12.6997 1.66675 12.4664 1.66675 11.9997 1.66675H7.99967C7.53296 1.66675 7.29961 1.66675 7.12135 1.75758C6.96455 1.83747 6.83706 1.96495 6.75717 2.12176C6.66634 2.30002 6.66634 2.53337 6.66634 3.00008V3.66675C6.66634 4.13346 6.66634 4.36681 6.75717 4.54507C6.83706 4.70188 6.96455 4.82936 7.12135 4.90925C7.29961 5.00008 7.53296 5.00008 7.99967 5.00008Z\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g>"],
  "code": ["0 0 24 24", "<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g>"],
  "copy": ["0 0 24 24", "<rect width=\"24\" height=\"24\" stroke=\"none\" fill=\"#000000\" opacity=\"0\"></rect> <g transform=\"matrix(0.16 0 0 0.16 12 12)\"> <path style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;\" transform=\" translate(-66, -64)\" d=\"M 42 1 C 40.3 1 39 2.3 39 4 C 39 5.7 40.3 7 42 7 L 96 7 C 105.4 7 113 14.6 113 24 L 113 108 C 113 109.7 114.3 111 116 111 C 117.7 111 119 109.7 119 108 L 119 24 C 119 11.3 108.7 1 96 1 L 42 1 z M 26 17 C 18.8 17 13 22.8 13 30 L 13 114 C 13 121.2 18.8 127 26 127 L 90 127 C 97.2 127 103 121.2 103 114 L 103 54 C 103 52.3 101.7 51 100 51 C 98.3 51 97 52.3 97 54 L 97 114 C 97 117.9 93.9 121 90 121 L 26 121 C 22.1 121 19 117.9 19 114 L 19 30 C 19 26.1 22.1 23 26 23 L 77 23 L 77 30 C 77 37.2 82.8 43 90 43 L 100 43 C 101.7 43 103 41.7 103 40 C 103 33.9 100.60078 28.099219 96.300781 23.699219 C 91.900781 19.399219 86.1 17 80 17 L 26 17 z M 83 23.300781 C 86.4 23.900781 89.5 25.5 92 28 C 94.5 30.5 96.099219 33.6 96.699219 37 L 90 37 C 86.1 37 83 33.9 83 30 L 83 23.300781 z\" stroke-linecap=\"round\"></path> </g>"],
  "delete-icon": ["0 0 1024 1024", "<path fill=\"#000000\" d=\"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z\"></path>"],
  "dotpoints-01": ["0 0 20 20", "<path d=\"M17.5 9.99984L7.5 9.99984M17.5 4.99984L7.5 4.99984M17.5 14.9998L7.5 14.9998M4.16667 9.99984C4.16667 10.4601 3.79357 10.8332 3.33333 10.8332C2.8731 10.8332 2.5 10.4601 2.5 9.99984C2.5 9.5396 2.8731 9.1665 3.33333 9.1665C3.79357 9.1665 4.16667 9.5396 4.16667 9.99984ZM4.16667 4.99984C4.16667 5.46007 3.79357 5.83317 3.33333 5.83317C2.8731 5.83317 2.5 5.46007 2.5 4.99984C2.5 4.5396 2.8731 4.1665 3.33333 4.1665C3.79357 4.1665 4.16667 4.5396 4.16667 4.99984ZM4.16667 14.9998C4.16667 15.4601 3.79357 15.8332 3.33333 15.8332C2.8731 15.8332 2.5 15.4601 2.5 14.9998C2.5 14.5396 2.8731 14.1665 3.33333 14.1665C3.79357 14.1665 4.16667 14.5396 4.16667 14.9998Z\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "dots-grid": ["0 0 36 36", "<path d=\"M16.0007 7.99992C16.737 7.99992 17.334 7.40296 17.334 6.66659C17.334 5.93021 16.737 5.33325 16.0007 5.33325C15.2643 5.33325 14.6673 5.93021 14.6673 6.66659C14.6673 7.40296 15.2643 7.99992 16.0007 7.99992Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M16.0007 17.3333C16.737 17.3333 17.334 16.7363 17.334 15.9999C17.334 15.2635 16.737 14.6666 16.0007 14.6666C15.2643 14.6666 14.6673 15.2635 14.6673 15.9999C14.6673 16.7363 15.2643 17.3333 16.0007 17.3333Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M16.0007 26.6666C16.737 26.6666 17.334 26.0696 17.334 25.3333C17.334 24.5969 16.737 23.9999 16.0007 23.9999C15.2643 23.9999 14.6673 24.5969 14.6673 25.3333C14.6673 26.0696 15.2643 26.6666 16.0007 26.6666Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M25.334 7.99992C26.0704 7.99992 26.6673 7.40296 26.6673 6.66659C26.6673 5.93021 26.0704 5.33325 25.334 5.33325C24.5976 5.33325 24.0006 5.93021 24.0006 6.66659C24.0006 7.40296 24.5976 7.99992 25.334 7.99992Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M25.334 17.3333C26.0704 17.3333 26.6673 16.7363 26.6673 15.9999C26.6673 15.2635 26.0704 14.6666 25.334 14.6666C24.5976 14.6666 24.0006 15.2635 24.0006 15.9999C24.0006 16.7363 24.5976 17.3333 25.334 17.3333Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M25.334 26.6666C26.0704 26.6666 26.6673 26.0696 26.6673 25.3333C26.6673 24.5969 26.0704 23.9999 25.334 23.9999C24.5976 23.9999 24.0006 24.5969 24.0006 25.3333C24.0006 26.0696 24.5976 26.6666 25.334 26.6666Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M6.66732 7.99992C7.4037 7.99992 8.00065 7.40296 8.00065 6.66659C8.00065 5.93021 7.4037 5.33325 6.66732 5.33325C5.93094 5.33325 5.33398 5.93021 5.33398 6.66659C5.33398 7.40296 5.93094 7.99992 6.66732 7.99992Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M6.66732 17.3333C7.4037 17.3333 8.00065 16.7363 8.00065 15.9999C8.00065 15.2635 7.4037 14.6666 6.66732 14.6666C5.93094 14.6666 5.33398 15.2635 5.33398 15.9999C5.33398 16.7363 5.93094 17.3333 6.66732 17.3333Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M6.66732 26.6666C7.4037 26.6666 8.00065 26.0696 8.00065 25.3333C8.00065 24.5969 7.4037 23.9999 6.66732 23.9999C5.93094 23.9999 5.33398 24.5969 5.33398 25.3333C5.33398 26.0696 5.93094 26.6666 6.66732 26.6666Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "dots-vertical": ["0 0 24 24", "<path d=\"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "download-cloud-02": ["0 0 17 16", "<g clip-path=\"url(#clip0_6288_3562)\"> <path d=\"M5.58398 11.3333L8.25065 14M8.25065 14L10.9173 11.3333M8.25065 14V8M13.584 11.1619C14.3983 10.4894 14.9173 9.47196 14.9173 8.33333C14.9173 6.30829 13.2757 4.66667 11.2507 4.66667C11.105 4.66667 10.9687 4.59066 10.8947 4.46516C10.0254 2.98989 8.42027 2 6.58398 2C3.82256 2 1.58398 4.23858 1.58398 7C1.58398 8.3774 2.14095 9.62472 3.04195 10.529\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> <defs> <clipPath id=\"clip0_6288_3562\"> <rect width=\"16\" height=\"16\" fill=\"white\" transform=\"translate(0.25)\"></rect> </clipPath> </defs>"],
  "edit-02": ["0 0 24 24", "<path d=\"m18 10-4-4M2.5 21.5l3.384-.376c.414-.046.62-.069.814-.131a2 2 0 0 0 .485-.234c.17-.111.317-.259.61-.553L21 7a2.828 2.828 0 1 0-4-4L3.794 16.206c-.294.294-.442.442-.553.611a2 2 0 0 0-.234.485c-.062.193-.085.4-.131.814L2.5 21.5Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "edit-03": ["0 0 20 20", "<path d=\"M17.5 14.9995L16.6666 15.9112C16.2245 16.3946 15.6251 16.6662 15.0001 16.6662C14.3751 16.6662 13.7757 16.3946 13.3337 15.9112C12.891 15.4288 12.2916 15.1579 11.6668 15.1579C11.042 15.1579 10.4426 15.4288 9.99998 15.9112M2.5 16.6662H3.89545C4.3031 16.6662 4.50693 16.6662 4.69874 16.6202C4.8688 16.5793 5.03138 16.512 5.1805 16.4206C5.34869 16.3175 5.49282 16.1734 5.78107 15.8852L16.25 5.4162C16.9404 4.72585 16.9404 3.60656 16.25 2.9162C15.5597 2.22585 14.4404 2.22585 13.75 2.9162L3.28105 13.3852C2.9928 13.6734 2.84867 13.8175 2.7456 13.9857C2.65422 14.1348 2.58688 14.2974 2.54605 14.4675C2.5 14.6593 2.5 14.8631 2.5 15.2708V16.6662Z\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "eye": ["0 0 17 16", "<g clip-path=\"url(#clip0_6288_3559)\"> <path d=\"M1.86342 8.47545C1.77262 8.33169 1.72723 8.25981 1.70182 8.14894C1.68273 8.06566 1.68273 7.93433 1.70182 7.85105C1.72723 7.74018 1.77262 7.6683 1.86341 7.52454C2.61369 6.33656 4.84693 3.33333 8.25027 3.33333C11.6536 3.33333 13.8869 6.33656 14.6371 7.52454C14.7279 7.6683 14.7733 7.74018 14.7987 7.85105C14.8178 7.93433 14.8178 8.06566 14.7987 8.14894C14.7733 8.25981 14.7279 8.33169 14.6371 8.47545C13.8869 9.66343 11.6536 12.6667 8.25027 12.6667C4.84693 12.6667 2.61369 9.66344 1.86342 8.47545Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M8.25027 10C9.35484 10 10.2503 9.10456 10.2503 8C10.2503 6.89543 9.35484 5.99999 8.25027 5.99999C7.1457 5.99999 6.25027 6.89543 6.25027 8C6.25027 9.10456 7.1457 10 8.25027 10Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> <defs> <clipPath id=\"clip0_6288_3559\"> <rect width=\"16\" height=\"16\" fill=\"white\" transform=\"translate(0.25)\"></rect> </clipPath> </defs>"],
  "filter": ["0 0 24 24", "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>"],
  "hash-02": ["0 0 20 20", "<g id=\"hash-02\"> <path id=\"Icon\" d=\"M7.91663 2.5L5.41663 17.5M14.5833 2.5L12.0833 17.5M17.0833 6.66667H2.91665M16.25 13.3333H2.08331\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g>"],
  "help-circle": ["0 0 16 16", "<g clip-path=\"url(#clip0_1034_6714)\"> <path d=\"M6.05967 6.00016C6.21641 5.55461 6.52578 5.1789 6.93298 4.93958C7.34018 4.70027 7.81894 4.61279 8.28446 4.69264C8.74998 4.77249 9.17222 5.01451 9.47639 5.37585C9.78057 5.73718 9.94705 6.19451 9.94634 6.66683C9.94634 8.00016 7.94634 8.66683 7.94634 8.66683M7.99967 11.3335H8.00634M14.6663 8.00016C14.6663 11.6821 11.6816 14.6668 7.99967 14.6668C4.31778 14.6668 1.33301 11.6821 1.33301 8.00016C1.33301 4.31826 4.31778 1.3335 7.99967 1.3335C11.6816 1.3335 14.6663 4.31826 14.6663 8.00016Z\" stroke=\"currentColor\" stroke-width=\"1.33333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g> <defs> <clipPath id=\"clip0_1034_6714\"> <rect width=\"16\" height=\"16\" fill=\"white\"></rect> </clipPath> </defs>"],
  "info-circle": ["0 0 24 24", "<path d=\"M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "layout-alt-04": ["0 0 24 24", "<path d=\"M12 12h9m-9-9v18M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "lease": ["0 0 24 24", "<path d=\"M17 8.99994C17 8.48812 16.8047 7.9763 16.4142 7.58579C16.0237 7.19526 15.5118 7 15 7M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H7V19H9V17H11L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "link": ["0 0 20 20", "<path d=\"M6.24935 5.83301H5.83268C3.5315 5.83301 1.66602 7.69849 1.66602 9.99968C1.66602 12.3009 3.5315 14.1663 5.83268 14.1663H7.49935C9.80054 14.1663 11.666 12.3009 11.666 9.99968M13.7493 14.1663H14.166C16.4672 14.1663 18.3327 12.3009 18.3327 9.99968C18.3327 7.69849 16.4672 5.83301 14.166 5.83301H12.4993C10.1982 5.83301 8.33268 7.69849 8.33268 9.99968\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "log-out-01": ["0 0 24 24", "<path d=\"m16 17 5-5m0 0-5-5m5 5H9m0-9H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21H9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "mail-01": ["0 0 20 20", "<path d=\"M1.66675 5.83398L8.47085 10.5969C9.02182 10.9825 9.29731 11.1754 9.59697 11.2501C9.86166 11.3161 10.1385 11.3161 10.4032 11.2501C10.7029 11.1754 10.9783 10.9825 11.5293 10.5969L18.3334 5.83398M5.66675 16.6673H14.3334C15.7335 16.6673 16.4336 16.6673 16.9684 16.3948C17.4388 16.1552 17.8212 15.7727 18.0609 15.3023C18.3334 14.7675 18.3334 14.0674 18.3334 12.6673V7.33398C18.3334 5.93385 18.3334 5.23379 18.0609 4.69901C17.8212 4.2286 17.4388 3.84615 16.9684 3.60647C16.4336 3.33398 15.7335 3.33398 14.3334 3.33398H5.66675C4.26662 3.33398 3.56655 3.33398 3.03177 3.60647C2.56137 3.84615 2.17892 4.2286 1.93923 4.69901C1.66675 5.23379 1.66675 5.93385 1.66675 7.33398V12.6673C1.66675 14.0674 1.66675 14.7675 1.93923 15.3023C2.17892 15.7727 2.56137 16.1552 3.03177 16.3948C3.56655 16.6673 4.26662 16.6673 5.66675 16.6673Z\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "minus": ["0 0 24 24", "<path d=\"M5 12h14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "not-found": ["0 0 64 64", "<circle cx=\"28\" cy=\"28\" r=\"12\" stroke=\"currentColor\" stroke-width=\"3\" fill=\"none\"></circle> <path d=\"M24 24L32 32M32 24L24 32\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path> <path d=\"M37 37L44 44\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"></path>"],
  "plus": ["0 0 24 24", "<path d=\"M12 5v14m-7-7h14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "rejected-circle": ["0 0 25 24", "<path d=\"M15.6665 9L9.6665 15M9.6665 9L15.6665 15M22.6665 12C22.6665 17.5228 18.1894 22 12.6665 22C7.14366 22 2.6665 17.5228 2.6665 12C2.6665 6.47715 7.14366 2 12.6665 2C18.1894 2 22.6665 6.47715 22.6665 12Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "requests": ["0 0 24 24", "<path d=\"M15 14V12C15 11.4696 14.7893 10.9609 14.4142 10.5858C14.0391 10.2107 13.5304 10 13 10H9M9 10L11 8M9 10L11 12M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21L16 19L14 21L12 19L10 21L8 19L5 21Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "search-lg": ["0 0 24 24", "<path d=\"m21 21-3.5-3.5m2.5-6a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "settings-01": ["0 0 24 24", "<path d=\"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M18.727 14.727a1.5 1.5 0 0 0 .3 1.655l.055.054a1.816 1.816 0 0 1 0 2.573 1.818 1.818 0 0 1-2.573 0l-.055-.055a1.5 1.5 0 0 0-1.654-.3 1.5 1.5 0 0 0-.91 1.373v.155a1.818 1.818 0 1 1-3.636 0V20.1a1.5 1.5 0 0 0-.981-1.373 1.5 1.5 0 0 0-1.655.3l-.054.055a1.818 1.818 0 0 1-3.106-1.287 1.818 1.818 0 0 1 .533-1.286l.054-.055a1.5 1.5 0 0 0 .3-1.654 1.5 1.5 0 0 0-1.372-.91h-.155a1.818 1.818 0 1 1 0-3.636H3.9a1.5 1.5 0 0 0 1.373-.981 1.5 1.5 0 0 0-.3-1.655l-.055-.054A1.818 1.818 0 1 1 7.491 4.99l.054.054a1.5 1.5 0 0 0 1.655.3h.073a1.5 1.5 0 0 0 .909-1.372v-.155a1.818 1.818 0 0 1 3.636 0V3.9a1.499 1.499 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.654-.3l.054-.055a1.817 1.817 0 0 1 2.573 0 1.819 1.819 0 0 1 0 2.573l-.055.054a1.5 1.5 0 0 0-.3 1.655v.073a1.5 1.5 0 0 0 1.373.909h.155a1.818 1.818 0 0 1 0 3.636H20.1a1.499 1.499 0 0 0-1.373.91Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "tag": ["0 0 24 24", "<path d=\"M8 8.5H8.01M4.56274 3.43726L2.93726 5.06274C2.59136 5.40864 2.4184 5.5816 2.29472 5.78343C2.18506 5.96237 2.10425 6.15746 2.05526 6.36154C2 6.59171 2 6.8363 2 7.32548L2 10.1745C2 10.6637 2 10.9083 2.05526 11.1385C2.10425 11.3425 2.18506 11.5376 2.29472 11.7166C2.4184 11.9184 2.59135 12.0914 2.93726 12.4373L10.6059 20.1059C11.7939 21.2939 12.388 21.888 13.0729 22.1105C13.6755 22.3063 14.3245 22.3063 14.927 22.1105C15.612 21.888 16.2061 21.2939 17.3941 20.1059L19.6059 17.8941C20.7939 16.7061 21.388 16.112 21.6105 15.427C21.8063 14.8245 21.8063 14.1755 21.6105 13.5729C21.388 12.888 20.7939 12.2939 19.6059 11.1059L11.9373 3.43726C11.5914 3.09136 11.4184 2.9184 11.2166 2.79472C11.0376 2.68506 10.8425 2.60425 10.6385 2.55526C10.4083 2.5 10.1637 2.5 9.67452 2.5L6.82548 2.5C6.3363 2.5 6.09171 2.5 5.86154 2.55526C5.65746 2.60425 5.46237 2.68506 5.28343 2.79472C5.0816 2.9184 4.90865 3.09135 4.56274 3.43726ZM8.5 8.5C8.5 8.77614 8.27614 9 8 9C7.72386 9 7.5 8.77614 7.5 8.5C7.5 8.22386 7.72386 8 8 8C8.27614 8 8.5 8.22386 8.5 8.5Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "text": ["0 0 24 24", "<path d=\"M12 3V21M9 21H15M19 6V3H5V6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "trash-03": ["0 0 20 20", "<path d=\"M7.5 2.5H12.5M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5M8.33333 8.75V12.9167M11.6667 8.75V12.9167\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "upload-cloud-01": ["0 0 24 24", "<path d=\"M4 16.242A4.5 4.5 0 0 1 6.08 8.02a6.002 6.002 0 0 1 11.84 0A4.5 4.5 0 0 1 20 16.242M8 16l4-4m0 0 4 4m-4-4v9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "user-01": ["0 0 24 24", "<path d=\"M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "users-01": ["0 0 24 24", "<path d=\"M22 21v-2a4.002 4.002 0 0 0-3-3.874M15.5 3.291a4.001 4.001 0 0 1 0 7.418M17 21c0-1.864 0-2.796-.305-3.53a4 4 0 0 0-2.164-2.165C13.796 15 12.864 15 11 15H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "x-circle": ["0 0 21 20", "<path d=\"M13.1654 7.50008L8.16536 12.5001M8.16536 7.50008L13.1654 12.5001M18.9987 10.0001C18.9987 14.6025 15.2677 18.3334 10.6654 18.3334C6.06299 18.3334 2.33203 14.6025 2.33203 10.0001C2.33203 5.39771 6.06299 1.66675 10.6654 1.66675C15.2677 1.66675 18.9987 5.39771 18.9987 10.0001Z\" stroke=\"currentColor\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "x-close": ["0 0 24 25", "<path d=\"M18 6.5L6 18.5M6 6.5L18 18.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "clock": ["0 0 24 24", "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v6l4 2m6-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10\"></path>"],
  "file-02": ["0 0 24 24", "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14 11H8m2 4H8m8-8H8m12-.2v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8\"></path>"],
  "file-check-02": ["0 0 20 20", "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16.667 10.417v-4.75c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093c-.535-.272-1.235-.272-2.635-.272H7.333c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.092 1.093c-.273.535-.273 1.235-.273 2.635v8.666c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.093c.535.272 1.235.272 2.635.272H10m1.667-9.166h-5M8.333 12.5H6.667m6.666-6.667H6.667m5.416 10L13.75 17.5l3.75-3.75\"></path>"],
  "file-x": ["0 0 20 20", "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.667\" d=\"M11.667 9.668h-5m1.667 3.333H6.667m6.667-6.666H6.667m10 4.166V6.168c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093c-.534-.272-1.235-.272-2.635-.272H7.334c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093c-.272.535-.272 1.235-.272 2.635v8.667c0 1.4 0 2.1.272 2.635A2.5 2.5 0 0 0 4.7 18.562c.535.273 1.235.273 2.635.273h2.667m3.333-5L17.501 18m0-4.166L13.334 18\"></path>"],
  "arrow-left": ["0 0 24 24", "<path d=\"M19 12H5M12 19l-7-7 7-7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>"],
  "save-icon": ["0 0 20 20", "<path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.667\" d=\"M5.833 2.5v2.833c0 .467 0 .7.091.879.08.156.208.284.364.364.179.09.412.09.879.09h5.666c.467 0 .7 0 .879-.09a.83.83 0 0 0 .364-.364c.09-.179.09-.412.09-.879v-2m0 14.167v-5.333c0-.467 0-.7-.09-.879a.83.83 0 0 0-.364-.364c-.179-.09-.412-.09-.879-.09H7.167c-.467 0-.7 0-.879.09a.83.83 0 0 0-.364.364c-.09.179-.09.412-.09.879V17.5M17.5 7.771V13.5c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2.5 15.6 2.5 14.9 2.5 13.5v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C4.4 2.5 5.1 2.5 6.5 2.5h5.729c.407 0 .611 0 .803.046q.257.061.482.2c.168.103.312.247.6.535l2.605 2.605c.288.288.432.432.535.6q.139.226.2.482c.046.192.046.396.046.803\"></path>"],
  "three-lines": ["0 0 24 24", "<path d=\"M4 6h16M4 12h16M4 18h16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"></path>"]
};
const ALIAS = {
  Search: 'search-lg',
  search: 'search-lg',
  chevronDown: 'chevron-down',
  chevronUp: 'chevron-up',
  chevronRight: 'chevron-right',
  chevronLeft: 'chevron-left',
  x: 'x-close',
  close: 'x-close',
  edit: 'edit-02',
  trash: 'trash-03',
  file: 'lease',
  alertTriangle: 'alert-triangle',
  alertCircle: 'alert-circle',
  info: 'info-circle',
  help: 'help-circle',
  checkCircle: 'check-circle',
  signature: 'edit-03',
  bell: 'bell-02',
  user: 'user-01',
  users: 'users-01',
  folder: 'layout-alt-04',
  type: 'text',
  settings: 'settings-01',
  dots: 'dots-vertical',
  download: 'download-cloud-02',
  upload: 'upload-cloud-01'
};
/** TkIcon. size 'sm' = 16px, 'md' = 20px (Tk default), or a pixel number. Color via color (Tk) or stroke (legacy). */
function Icon({
  name = 'info-circle',
  size = 'md',
  color,
  stroke,
  width,
  height,
  style,
  ...rest
}) {
  const key = ICONS[name] ? name : ALIAS[name] || 'info-circle';
  const [vb, inner] = ICONS[key] || ICONS['info-circle'];
  const px = typeof size === 'number' ? size : size === 'sm' ? 16 : 20;
  return React.createElement('svg', {
    width: width || px,
    height: height || px,
    viewBox: vb,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
    style: {
      display: 'block',
      flexShrink: 0,
      color: color || stroke || 'currentColor',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    },
    ...rest
  });
}
const ICON_NAMES = Object.keys(ICONS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/CustomStatsCard.jsx
try { (() => {
/* Mirrors TkCustomStatsCard: rounded-sm, py-[10px] px-3, 1px inset gray-200 ring + 0 1px 2px rgba(10,13,18,.05);
   40px icon tile (rounded-lg, variant-100 bg / variant-600 fg), gap 10px; value 24px semibold gray-900, title 14px semibold gray-600, inline. */
const V = {
  primary: 'brand',
  secondary: 'gray',
  success: 'success',
  warning: 'warning',
  danger: 'error',
  'gray-blue': 'gray-blue',
  'blue-light': 'blue-light',
  blue: 'blue',
  indigo: 'indigo',
  purple: 'purple',
  pink: 'pink',
  orange: 'orange'
};
/** TkCustomStatsCard — the compact inline stat card used on CLM Requests. */
function CustomStatsCard({
  title,
  value,
  iconName,
  iconVariant = 'primary',
  clickable = false,
  selected = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const c = V[iconVariant] || 'brand';
  const ring = selected ? 'inset 0 0 0 2px var(--brand-500)' : 'inset 0 0 0 1px ' + (clickable && hover ? 'var(--gray-300)' : 'var(--gray-200)');
  return React.createElement('div', {
    role: 'article',
    'aria-label': title + ' statistics',
    tabIndex: clickable ? 0 : undefined,
    onClick: () => clickable && onClick && onClick(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 12px',
      boxShadow: ring + ', 0 1px 2px 0 rgba(10,13,18,0.05)',
      background: '#fff',
      cursor: clickable ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, iconName && React.createElement('div', {
    'aria-hidden': true,
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-lg)',
      background: iconVariant === 'light-orange' ? 'var(--orange-50)' : `var(--${c}-100)`,
      color: iconVariant === 'light-orange' ? 'var(--orange-700)' : `var(--${c}-600)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, React.createElement(__ds_scope.Icon, {
    name: iconName
  })), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      font: '600 24px/32px var(--font-sans)',
      color: 'var(--gray-900)'
    }
  }, value), React.createElement('span', {
    style: {
      font: 'var(--text-button)',
      color: 'var(--gray-600)'
    }
  }, title))));
}
Object.assign(__ds_scope, { CustomStatsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CustomStatsCard.jsx", error: String((e && e.message) || e) }); }

// components/display/EmptyState.jsx
try { (() => {
/* Mirrors hk-clm-ui components/helpers/EmptyState.vue (same geometry as TkEmptyState, CLM not-found.svg, copy switches on filter state). */
const NOT_FOUND = "<svg width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"28\" cy=\"28\" r=\"12\" stroke=\"#9CA3AF\" stroke-width=\"3\" fill=\"none\"></circle> <path d=\"M24 24L32 32M32 24L24 32\" stroke=\"#9CA3AF\" stroke-width=\"2.5\" stroke-linecap=\"round\"></path> <path d=\"M37 37L44 44\" stroke=\"#9CA3AF\" stroke-width=\"3\" stroke-linecap=\"round\"></path> </svg>";
/** Empty state for list pages. */
function EmptyState({
  title = 'No data found',
  description,
  isFilterOrSearchActive = false,
  action,
  style
}) {
  const desc = description ?? (isFilterOrSearchActive ? 'No data matches your search criteria. Try adjusting your filters or search terms.' : 'Get started by creating your first item.');
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '64px 0',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      width: 96,
      height: 96,
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--gray-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 24
    }
  }, React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 64,
      height: 64,
      opacity: 0.6,
      display: 'flex'
    },
    dangerouslySetInnerHTML: {
      __html: NOT_FOUND
    }
  })), React.createElement('h3', {
    style: {
      margin: '0 0 8px',
      font: '600 18px/28px var(--font-sans)',
      color: 'var(--gray-900)'
    }
  }, title), desc && React.createElement('p', {
    style: {
      margin: 0,
      font: 'var(--text-body)',
      color: 'var(--gray-600)',
      textAlign: 'center',
      maxWidth: 384
    }
  }, desc), action && React.createElement('div', {
    style: {
      marginTop: 16
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/display/StatsCard.jsx
try { (() => {
/* Mirrors TkStatsCard + statsCardVariants. */
const ICON_V = {
  primary: 'brand',
  secondary: 'gray',
  success: 'success',
  warning: 'warning',
  danger: 'error',
  'gray-blue': 'gray-blue',
  'blue-light': 'blue-light',
  blue: 'blue',
  indigo: 'indigo',
  purple: 'purple',
  pink: 'pink',
  orange: 'orange',
  fuchsia: 'fuchsia'
};
/** TkStatsCard. 4px radius, 20px padding, inset 1px gray-200 ring; 40px icon tile; 14px semibold title; 30px value. */
function StatsCard({
  title,
  label,
  value,
  iconName,
  iconVariant = 'primary',
  clickable = false,
  selected = false,
  onClick,
  bottom,
  tag,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const c = ICON_V[iconVariant] || 'brand';
  const iconBg = iconVariant === 'light-orange' ? 'var(--orange-50)' : `var(--${c}-100)`;
  const iconFg = iconVariant === 'light-orange' ? 'var(--orange-700)' : `var(--${c}-600)`;
  const ringS = selected ? 'inset 0 0 0 2px var(--brand-500)' : 'inset 0 0 0 1px ' + (clickable && hover ? 'var(--gray-300)' : 'var(--gray-200)');
  return React.createElement('div', {
    role: 'article',
    tabIndex: clickable ? 0 : undefined,
    onClick: () => clickable && onClick && onClick(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-sm)',
      padding: 20,
      boxShadow: ringS,
      background: 'var(--surface-card)',
      cursor: clickable ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16
    }
  }, iconName && React.createElement('div', {
    'aria-hidden': true,
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-lg)',
      background: iconBg,
      color: iconFg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, React.createElement(__ds_scope.Icon, {
    name: iconName
  })), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement('h5', {
    style: {
      margin: 0,
      font: '600 14px/20px var(--font-sans)',
      color: 'var(--gray-600)'
    }
  }, title ?? label), React.createElement('p', {
    style: {
      margin: 0,
      font: 'var(--text-stat-value)',
      color: 'var(--gray-900)'
    }
  }, value))), (bottom || tag) && React.createElement('div', {
    style: {
      marginTop: 12
    }
  }, bottom || tag));
}
Object.assign(__ds_scope, { StatsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatsCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
/* Mirrors TkButton + utils/variantClasses.js. Border = 1px inset ring (box-shadow), not a CSS border. */
const ring = c => 'inset 0 0 0 1px ' + c;
const V = {
  primary: {
    rest: {
      background: 'var(--brand-600)',
      color: '#fff',
      boxShadow: ring('var(--brand-700)')
    },
    hover: {
      background: 'var(--brand-700)'
    },
    focus: 'var(--brand-500)',
    off: 2,
    filled: true
  },
  'primary-outline': {
    rest: {
      background: 'transparent',
      color: 'var(--brand-700)',
      boxShadow: ring('var(--brand-300)')
    },
    hover: {
      background: 'var(--brand-50)',
      color: 'var(--brand-800)'
    },
    focus: 'var(--brand-500)',
    off: 2
  },
  'primary-ghost': {
    rest: {
      background: 'transparent',
      color: 'var(--brand-700)'
    },
    hover: {
      background: 'var(--brand-50)',
      color: 'var(--brand-800)'
    },
    focus: 'var(--brand-500)',
    off: 0
  },
  secondary: {
    rest: {
      background: '#fff',
      color: 'var(--gray-700)',
      boxShadow: ring('var(--gray-300)')
    },
    hover: {
      background: 'var(--gray-50)',
      color: 'var(--gray-800)'
    },
    focus: 'var(--brand-500)',
    off: 2
  },
  'secondary-ghost': {
    rest: {
      background: 'transparent',
      color: 'var(--gray-600)'
    },
    hover: {
      background: 'var(--gray-50)',
      color: 'var(--gray-900)'
    },
    focus: 'var(--brand-500)',
    off: 0
  },
  'secondary-link': {
    rest: {
      background: 'transparent',
      color: 'var(--gray-600)'
    },
    hover: {
      color: 'var(--gray-700)'
    },
    focus: 'var(--brand-500)',
    off: 0,
    link: true
  },
  warning: {
    rest: {
      background: 'var(--warning-600)',
      color: '#fff',
      boxShadow: ring('var(--warning-700)')
    },
    hover: {
      background: 'var(--warning-700)'
    },
    focus: 'var(--warning-500)',
    off: 2,
    filled: true
  },
  'warning-outline': {
    rest: {
      background: 'transparent',
      color: 'var(--warning-700)',
      boxShadow: ring('var(--warning-300)')
    },
    hover: {
      background: 'var(--warning-50)',
      color: 'var(--warning-800)'
    },
    focus: 'var(--warning-500)',
    off: 2
  },
  'warning-ghost': {
    rest: {
      background: 'transparent',
      color: 'var(--warning-700)'
    },
    hover: {
      background: 'var(--warning-500)',
      color: 'var(--warning-800)'
    },
    focus: 'var(--warning-500)',
    off: 0
  },
  danger: {
    rest: {
      background: 'var(--error-600)',
      color: '#fff',
      boxShadow: ring('var(--error-700)')
    },
    hover: {
      background: 'var(--error-700)'
    },
    focus: 'var(--error-600)',
    off: 2,
    filled: true
  },
  'danger-2': {
    rest: {
      background: '#fef3f2',
      color: '#d92d20',
      boxShadow: ring('var(--gray-300)')
    },
    hover: {
      background: 'var(--error-600)',
      color: '#fff',
      boxShadow: ring('var(--error-600)')
    },
    focus: null,
    off: 0,
    filled: true
  },
  'danger-outline': {
    rest: {
      background: 'transparent',
      color: 'var(--error-700)',
      boxShadow: ring('var(--error-300)')
    },
    hover: {
      background: 'var(--error-50)',
      color: 'var(--error-800)'
    },
    focus: 'var(--error-500)',
    off: 2
  },
  'danger-ghost': {
    rest: {
      background: 'transparent',
      color: 'var(--error-700)'
    },
    hover: {
      background: 'var(--error-50)',
      color: 'var(--error-800)'
    },
    focus: 'var(--error-500)',
    off: 0
  },
  success: {
    rest: {
      background: 'var(--success-600)',
      color: '#fff',
      boxShadow: ring('var(--success-700)')
    },
    hover: {
      background: 'var(--success-700)'
    },
    focus: 'var(--success-500)',
    off: 2,
    filled: true
  },
  'success-2': {
    rest: {
      background: '#dcfae6',
      color: '#079455',
      boxShadow: ring('var(--gray-300)')
    },
    hover: {
      background: 'var(--success-600)',
      color: '#fff',
      boxShadow: ring('var(--success-600)')
    },
    focus: null,
    off: 0,
    filled: true
  },
  'success-outline': {
    rest: {
      background: 'transparent',
      color: 'var(--success-700)',
      boxShadow: ring('var(--success-300)')
    },
    hover: {
      background: 'var(--success-50)',
      color: 'var(--success-800)'
    },
    focus: 'var(--success-500)',
    off: 2
  },
  'success-ghost': {
    rest: {
      background: 'transparent',
      color: 'var(--success-700)'
    },
    hover: {
      background: 'var(--success-50)',
      color: 'var(--success-800)'
    },
    focus: 'var(--success-500)',
    off: 0
  },
  green: {
    rest: {
      background: 'var(--success-100)',
      color: 'var(--success-600)',
      boxShadow: ring('var(--gray-300)')
    },
    hover: {
      background: 'var(--success-600)',
      color: '#fff'
    },
    focus: 'var(--success-500)',
    off: 0,
    filled: true
  },
  red: {
    rest: {
      background: 'var(--error-50)',
      color: 'var(--error-600)',
      boxShadow: ring('var(--gray-300)')
    },
    hover: {
      background: 'var(--error-600)',
      color: '#fff'
    },
    focus: 'var(--error-500)',
    off: 2,
    filled: true
  }
};
const LEGACY = {
  outline: 'primary-outline',
  ghost: 'secondary-ghost',
  link: 'primary-ghost',
  destructive: 'danger',
  'destructive-outline': 'danger-outline'
};
/* Tk has one size (px-3.5 py-2.5 → 40px). sm/lg are CLM additions that only change vertical padding. */
const PAD = {
  sm: '8px 12px',
  md: '10px 14px',
  lg: '12px 16px'
};
function Spinner() {
  return React.createElement('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 64 64',
    fill: 'none',
    style: {
      color: 'var(--gray-400)'
    }
  }, React.createElement('g', {
    strokeWidth: 4,
    strokeLinecap: 'round',
    stroke: 'currentColor'
  }, React.createElement('path', {
    d: 'M60,32 C60,16,47.464,4,32,4S4,16,4,32'
  }), React.createElement('animateTransform', {
    attributeName: 'transform',
    type: 'rotate',
    values: '0,32,32;360,32,32',
    dur: '750ms',
    repeatCount: 'indefinite'
  })));
}
/** TkButton. 19 Tk variants; 14px semibold, 4px radius, 10px 14px padding, 20px icons. */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconLeft,
  iconRight,
  iconOnly = false,
  asLink = false,
  fullWidth = false,
  align = 'center',
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  if (variant === 'disabled') {
    disabled = true;
    variant = 'primary';
  }
  const key = LEGACY[variant] || variant;
  const v = V[key] || V.primary;
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const off = disabled || loading;
  let s = {
    ...v.rest
  };
  if (!off && hover) s = {
    ...s,
    ...v.hover
  };
  if (asLink && hover) s.background = 'transparent';
  if (off) {
    s.color = 'var(--gray-400)';
    if (v.filled) s.background = 'var(--gray-100)';
    if (s.boxShadow) s.boxShadow = ring('var(--gray-200)');
  }
  const pad = asLink || v.link ? '2px' : iconOnly ? '10px' : PAD[size] || PAD.md;
  const justify = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    between: 'space-between'
  }[align];
  return React.createElement('button', {
    type,
    disabled: off,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: justify,
      gap: 4,
      padding: pad,
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-button)',
      whiteSpace: 'nowrap',
      cursor: off ? 'default' : 'pointer',
      pointerEvents: off ? 'none' : undefined,
      transition: 'color var(--transition-color),background-color var(--transition-color),box-shadow var(--transition-color)',
      outline: focus && v.focus && !off ? '2px solid ' + v.focus : 'none',
      outlineOffset: v.off,
      boxSizing: 'border-box',
      ...s,
      ...style
    },
    ...rest
  }, React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, loading && React.createElement(Spinner), iconLeft && React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 'md'
  }), icon, !iconOnly && children), iconRight && React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 'md'
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/* Mirrors TkCheckbox: 20px box, 4px radius, gray-300 border, brand-600 checked, 16px check icon. */
/** TkCheckbox. checked may be true | false | 'indeterminate'. onChange receives the next boolean. */
function Checkbox({
  checked = false,
  onChange,
  label,
  helpText,
  disabled = false,
  id,
  style
}) {
  const cid = React.useMemo(() => id || 'cb-' + Math.random().toString(36).slice(2, 9), [id]);
  const [focus, setFocus] = React.useState(false);
  const on = checked === true || checked === 'indeterminate';
  const box = {
    position: 'relative',
    width: 20,
    height: 20,
    flexShrink: 0,
    marginTop: 2,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid ' + (on && !disabled ? 'var(--brand-600)' : 'var(--gray-300)'),
    background: disabled ? 'var(--gray-50)' : on ? 'var(--brand-600)' : '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    color: disabled ? 'var(--gray-300)' : '#fff',
    outline: focus ? '2px solid var(--brand-500)' : 'none',
    outlineOffset: 2,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('span', {
    style: box
  }, React.createElement('input', {
    type: 'checkbox',
    id: cid,
    checked: on,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: () => onChange && onChange(!(checked === true)),
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }), on && React.createElement(__ds_scope.Icon, {
    name: checked === 'indeterminate' ? 'minus' : 'check',
    size: 'sm',
    style: {
      pointerEvents: 'none'
    }
  })), (label || helpText) && React.createElement('div', null, label && React.createElement('label', {
    htmlFor: cid,
    style: {
      display: 'block',
      font: 'var(--text-form-label)',
      color: disabled ? 'var(--gray-500)' : 'var(--gray-700)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, label), helpText && React.createElement('p', {
    style: {
      margin: 0,
      font: 'var(--text-body)',
      color: disabled ? 'var(--gray-400)' : 'var(--gray-600)'
    }
  }, helpText)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
/* Mirrors TkTable / TkTableHeaderItem / TkTableRow / TkTableRowItem:
   wrapper border-top gray-200; head row gray-100, th 44px, 12px semibold uppercase gray-600, cell px-6;
   td py-4 px-6 white, hover gray-50, row border-bottom gray-200; sort icon arrow-up #A4A7AE (rotated for desc). */
function Row({
  row,
  i,
  columns,
  selectable,
  checked,
  onToggle,
  hoverable,
  onRowClick,
  last,
  lastRowBorder
}) {
  const [hover, setHover] = React.useState(false);
  const bg = hoverable && hover ? 'var(--gray-50)' : '#fff';
  return React.createElement('tr', {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => onRowClick && onRowClick(row, i),
    style: {
      borderBottom: !last || lastRowBorder ? '1px solid var(--gray-200)' : 'none',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background-color var(--transition-color)'
    }
  }, selectable && React.createElement('td', {
    onClick: e => e.stopPropagation(),
    style: {
      padding: '16px 16px 16px 24px',
      background: bg,
      width: 20
    }
  }, React.createElement(__ds_scope.Checkbox, {
    checked,
    onChange: onToggle
  })), columns.map((c, ci) => React.createElement('td', {
    key: c.key,
    style: {
      padding: ci === 0 && selectable ? '16px 24px 16px 0' : '16px 24px',
      verticalAlign: 'middle',
      background: bg,
      font: 'var(--text-body)',
      color: 'var(--gray-900)',
      width: c.width,
      textAlign: c.align
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      justifyContent: c.align === 'right' ? 'flex-end' : undefined
    }
  }, c.render ? c.render(row, i) : row[c.key]))));
}
/** TkTable. Columns: {key,label,sortable,render,width,align}. */
function Table({
  columns = [],
  rows = [],
  selectable = false,
  selected = [],
  onSelectChange,
  sortKey,
  sortDir,
  onSort,
  hoverable = true,
  onRowClick,
  lastRowBorder = true,
  showHeader = true,
  loading = false,
  emptyState = false,
  noDataMessage = 'No Data Found',
  style
}) {
  const all = rows.length > 0 && selected.length === rows.length;
  const some = selected.length > 0 && !all;
  const toggleAll = () => onSelectChange && onSelectChange(all ? [] : rows.map((_, i) => i));
  const toggleOne = i => onSelectChange && onSelectChange(selected.includes(i) ? selected.filter(x => x !== i) : [...selected, i]);
  return React.createElement('div', {
    style: {
      position: 'relative',
      width: '100%',
      overflow: 'auto',
      borderTop: '1px solid var(--gray-200)',
      background: '#fff',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('table', {
    role: 'table',
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: 'var(--text-body)'
    }
  }, showHeader && React.createElement('thead', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 4,
      outline: '1px solid var(--gray-200)'
    }
  }, React.createElement('tr', {
    style: {
      background: 'var(--surface-table-head)'
    }
  }, selectable && React.createElement('th', {
    style: {
      padding: '16px 12px 16px 24px',
      width: 20,
      textAlign: 'left'
    }
  }, React.createElement(__ds_scope.Checkbox, {
    checked: some ? 'indeterminate' : all,
    onChange: toggleAll
  })), columns.map((c, ci) => React.createElement('th', {
    key: c.key,
    onClick: () => c.sortable && onSort && onSort(c.key),
    tabIndex: 0,
    style: {
      height: 44,
      font: 'var(--text-table-header)',
      color: 'var(--gray-600)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      background: 'var(--surface-table-head)',
      textAlign: 'left',
      cursor: c.sortable ? 'pointer' : 'default',
      userSelect: c.sortable ? 'none' : undefined,
      padding: 0,
      width: c.width
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: ci === 0 && selectable ? '0 24px 0 0' : '0 24px',
      justifyContent: c.align === 'right' ? 'flex-end' : undefined
    }
  }, c.label, c.sortable && sortKey === c.key && React.createElement(__ds_scope.Icon, {
    name: 'arrow-up',
    color: '#A4A7AE',
    style: {
      transform: sortDir === 'desc' ? 'rotate(-180deg)' : 'none'
    }
  })))))), React.createElement('tbody', null, !loading && rows.map((row, i) => React.createElement(Row, {
    key: row.id ?? i,
    row,
    i,
    columns,
    selectable,
    checked: selected.includes(i),
    onToggle: () => toggleOne(i),
    hoverable,
    onRowClick,
    last: i === rows.length - 1,
    lastRowBorder
  })))), !loading && rows.length === 0 && (emptyState ? React.createElement(__ds_scope.EmptyState) : React.createElement('div', {
    style: {
      font: 'var(--text-body)',
      color: 'var(--gray-900)',
      margin: '16px 24px'
    }
  }, noDataMessage)));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/forms/DateRangeInput.jsx
try { (() => {
/* Trigger of TkDatePicker type="range" as used in CLM request filters (inputClass !h-10): 40px, 1px gray-300, 4px radius,
   calendar icon, "MMM DD, YYYY - MMM DD, YYYY" in 14px semibold gray-900, chevron, clear x-circle. Calendar panel not reproduced. */
/** Date range trigger (display only). */
function DateRangeInput({
  value,
  placeholder = 'Date Range',
  onClear,
  onClick,
  style
}) {
  const [from, to] = value || [];
  const has = from || to;
  return React.createElement('div', {
    role: 'button',
    tabIndex: 0,
    onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 12px',
      border: '1px solid var(--gray-300)',
      borderRadius: 'var(--radius-sm)',
      background: '#fff',
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'calendar',
    color: 'var(--gray-700)'
  }), React.createElement('span', {
    style: {
      font: has ? 'var(--text-button)' : 'var(--text-body)',
      color: has ? 'var(--gray-900)' : 'var(--gray-400)'
    }
  }, has ? `${from || ''} - ${to || ''}` : placeholder), React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    color: 'var(--gray-700)'
  }), has && onClear && React.createElement('span', {
    role: 'button',
    'aria-label': 'Clear dates',
    onClick: e => {
      e.stopPropagation();
      onClear();
    },
    style: {
      display: 'flex',
      marginLeft: 4
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x-circle',
    color: 'var(--gray-900)'
  })));
}
Object.assign(__ds_scope, { DateRangeInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DateRangeInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/* Mirrors TkInput: 44px, 1px inset ring gray-300, shadow-xs, focus ring-2 blue-500, error ring error-600. */
const H = {
  sm: 'var(--control-height-sm)',
  md: 'var(--control-height-md)',
  lg: 'var(--control-height-lg)'
};
/** TkInput with optional label, prefix/suffix icon, prefix text, help text and error messages. */
function Input({
  label,
  required = false,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  size = 'lg',
  disabled = false,
  hasErrors,
  error,
  messages,
  helpText,
  prefixIcon,
  suffixIcon,
  prefix,
  prefixWidth = 90,
  clearable = false,
  onClear,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const err = hasErrors ?? error ?? false;
  const [focus, setFocus] = React.useState(false);
  const iid = React.useMemo(() => id || 'in-' + Math.random().toString(36).slice(2, 9), [id]);
  const hasSuffix = err || suffixIcon || clearable && value;
  const ringC = err ? 'var(--error-600)' : focus ? 'var(--focus-ring-input)' : 'var(--gray-300)';
  const ringW = focus ? 2 : 1;
  const msg = Array.isArray(messages) ? messages.join(', ') : messages;
  const input = React.createElement('input', {
    id: iid,
    type,
    value,
    defaultValue,
    onChange,
    placeholder,
    disabled,
    'aria-invalid': err,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: 'block',
      width: '100%',
      height: H[size] || H.lg,
      padding: `8px ${hasSuffix ? 40 : 12}px 8px ${prefixIcon ? 40 : 12}px`,
      border: 'none',
      outline: 'none',
      borderRadius: prefix ? '0 var(--radius-sm) var(--radius-sm) 0' : 'var(--radius-sm)',
      boxShadow: `inset 0 0 0 ${ringW}px ${ringC}, var(--shadow-xs)`,
      background: disabled ? 'var(--gray-100)' : '#fff',
      color: disabled ? 'var(--gray-400)' : 'var(--gray-900)',
      font: 'var(--text-input)',
      boxSizing: 'border-box',
      pointerEvents: disabled ? 'none' : undefined,
      ...style
    },
    ...rest
  });
  const field = React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, prefix && React.createElement('div', {
    style: {
      minWidth: prefixWidth,
      width: prefixWidth === 90 ? undefined : prefixWidth,
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      border: '1px solid var(--gray-300)',
      borderRight: 0,
      borderRadius: 'var(--radius-sm) 0 0 var(--radius-sm)',
      color: 'var(--gray-600)',
      font: 'var(--text-input)',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box'
    }
  }, prefix), React.createElement('div', {
    style: {
      position: 'relative',
      flex: 1
    }
  }, prefixIcon && React.createElement('div', {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 12,
      display: 'flex',
      alignItems: 'center',
      pointerEvents: 'none',
      color: 'var(--gray-500)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: prefixIcon
  })), input, hasSuffix && React.createElement('div', {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 12,
      display: 'flex',
      alignItems: 'center'
    }
  }, err ? React.createElement(__ds_scope.Icon, {
    name: 'alert-circle',
    color: 'var(--error-600)'
  }) : clearable && value ? React.createElement('button', {
    type: 'button',
    'aria-label': 'Clear input',
    onClick: onClear,
    style: {
      background: 'none',
      border: 'none',
      padding: '8px 4px',
      cursor: 'pointer',
      color: 'var(--gray-600)',
      display: 'flex'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x-close'
  })) : React.createElement(__ds_scope.Icon, {
    name: suffixIcon,
    color: 'var(--gray-400)'
  }))));
  if (!label && !helpText && !(err && msg)) return React.createElement('div', {
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      ...wrapperStyle
    }
  }, field);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      fontFamily: 'var(--font-sans)',
      ...wrapperStyle
    }
  }, label && React.createElement('label', {
    htmlFor: iid,
    style: {
      display: 'block',
      font: 'var(--text-form-label)',
      color: 'var(--gray-700)'
    }
  }, label, required && React.createElement('span', {
    'aria-hidden': true,
    style: {
      color: 'var(--error-500)'
    }
  }, ' *')), field, helpText && React.createElement('p', {
    style: {
      margin: 0,
      font: 'var(--text-body)',
      color: 'var(--gray-600)'
    }
  }, helpText), err && msg && React.createElement('p', {
    role: 'alert',
    style: {
      margin: 0,
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--error-600)'
    }
  }, msg));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Tag.jsx
try { (() => {
/* Mirrors TkTag + tagVariants in utils/variantClasses.js */
const FAM = ['primary:brand', 'secondary:gray', 'warning:warning', 'danger:error', 'success:success', 'gray-blue:gray-blue', 'blue:blue', 'blue-light:blue-light', 'pink:pink', 'indigo:indigo', 'purple:purple', 'orange:orange'];
const V = {};
FAM.forEach(p => {
  const [k, c] = p.split(':');
  V[k] = {
    background: `var(--${c}-50)`,
    color: `var(--${c}-700)`,
    border: `1px solid var(--${c}-200)`
  };
  V[k + '-ghost'] = {
    background: 'transparent',
    color: `var(--${c}-600)`,
    border: '1px solid transparent'
  };
  V[k + '-outline'] = {
    background: '#fff',
    color: `var(--${c}-600)`,
    border: `1px solid var(--${c}-600)`
  };
});
const LEGACY = {
  gray: 'secondary',
  brand: 'primary',
  error: 'danger'
};
const famColor = variant => {
  const base = variant.replace(/-(outline|ghost)$/, '');
  const f = FAM.find(p => p.startsWith(base + ':'));
  return f ? f.split(':')[1] : 'brand';
};
/** TkTag. 12px medium, 2px radius, 1px border, py 2px / px 8px. */
function Tag({
  label,
  children,
  variant,
  color,
  iconLeft,
  iconRight,
  closable = false,
  onClose,
  isBadge = false,
  style
}) {
  const key = variant || LEGACY[color] || color || 'primary';
  const s = V[key] || V.primary;
  const c = famColor(key);
  const pl = iconLeft ? 6 : isBadge ? 4 : 8,
    pr = iconRight || closable ? 6 : isBadge ? 4 : 8;
  return React.createElement('span', {
    role: 'tag',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: `2px ${pr}px 2px ${pl}px`,
      borderRadius: 'var(--radius-xs)',
      font: 'var(--text-caption)',
      whiteSpace: 'nowrap',
      transition: 'color var(--transition-color),background-color var(--transition-color)',
      boxSizing: 'border-box',
      ...s,
      ...style
    }
  }, iconLeft && React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 'sm',
    color: `var(--${c}-600)`
  }), React.createElement('span', null, children ?? label), iconRight && !closable && React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 'sm',
    color: `var(--${c}-600)`
  }), closable && React.createElement(__ds_scope.Icon, {
    name: 'x-close',
    size: 'sm',
    color: `var(--${c}-400, var(--${c}-600))`,
    role: 'button',
    'aria-label': 'Remove ' + (label || ''),
    tabIndex: 0,
    onClick: e => {
      e.stopPropagation();
      onClose && onClose();
    },
    style: {
      marginLeft: 4,
      cursor: 'pointer'
    }
  }));
}
/* hk-clm-ui common/services/colorMap.js — findColorMap(UPPER_SNAKE) with fallback 'secondary'. */
const COLOR_MAP = {
  ACTIVE: 'success',
  APPROVED: 'success',
  COMPLETED: 'success',
  EXECUTED: 'success',
  SIGNED: 'success',
  SUCCESS: 'success',
  IN_PROGRESS: 'warning',
  PENDING: 'warning',
  PENDING_SIGNATURE: 'warning',
  PENDING_SIGN: 'warning',
  PENDING_APPROVAL: 'warning',
  EXPIRED: 'orange',
  ON_HOLD: 'orange',
  OPEN: 'blue',
  SUBMITTED: 'blue',
  PAYLOAD: 'blue',
  NEW: 'blue-outline',
  RENEW: 'danger-outline',
  CLOSED: 'danger',
  ERROR: 'danger',
  INACTIVE: 'danger',
  NOT_STARTED: 'danger',
  REJECTED: 'danger',
  TERMINATED: 'danger',
  FAILED: 'danger',
  NON_SIGNING: 'secondary',
  DRAFT: 'secondary',
  NOT_GENERATED: 'secondary',
  PARTIALLY_SIGNED: 'secondary',
  CANCELED: 'primary',
  CANCELLED: 'primary'
};
const ColorMap = s => COLOR_MAP[String(s || '').trim().toUpperCase().replace(/[\s-]+/g, '_')] || 'secondary';
/** Status tag — CLM colorMap: "Pending Sign" → warning, "Not Started"/"Failed" → danger, "Sent" → secondary (fallback). */
function StatusTag({
  status = 'Not Started',
  style
}) {
  return React.createElement(Tag, {
    variant: ColorMap(status),
    label: status,
    style
  });
}
Object.assign(__ds_scope, { Tag, ColorMap, StatusTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/ListCard.jsx
try { (() => {
/* Mirrors hk-clm-ui components/helpers/tk-components/ListCard.vue: px-4 py-4, rounded-lg, 1px gray-200, white, min-h 70, mb-2.5;
   hover brand-300 border + shadow-md + gray-50/50 bg, 200ms. Default fields: name 14px semibold gray-900 + "Code:" 12px medium gray-500
   with 12px semibold gray-700 pill (px-2 py-0.5 rounded-md gray-100). Active badge: TkTag success/danger, px-3 py-1.5, min-w 70.
   Delete: 36px iconOnly trash-03, bg error-50, border error-200, rounded-lg, error-700 → hover error-800 / error-100. */
function DeleteButton({
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('button', {
    type: 'button',
    'aria-label': 'Delete',
    onClick: e => {
      e.stopPropagation();
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--error-200)',
      background: hover ? 'var(--error-100)' : 'var(--error-50)',
      color: hover ? 'var(--error-800)' : 'var(--error-700)',
      boxShadow: hover ? 'var(--shadow-sm)' : 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      flexShrink: 0
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'trash-03'
  }));
}
/** CLM list row card. Use `title` for the single-line layout, or showDefaultFields for name + Code pill. */
function ListCard({
  item = {},
  title,
  subtitle,
  showDefaultFields = false,
  showActiveBadge = false,
  onDelete,
  right,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const active = item.is_active ?? item.active;
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid ' + (hover ? 'var(--brand-300)' : 'var(--gray-200)'),
      background: hover ? 'rgb(250 250 250 / 0.5)' : '#fff',
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
      minHeight: 70,
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flex: 1,
      gap: 16,
      alignItems: 'center',
      minHeight: 24,
      minWidth: 0
    }
  }, showDefaultFields ? React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      paddingLeft: 4
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-button)',
      color: 'var(--gray-900)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.name), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--gray-500)'
    }
  }, 'Code:'), React.createElement('span', {
    style: {
      font: '600 12px/16px var(--font-sans)',
      color: hover ? 'var(--brand-700)' : 'var(--gray-700)',
      padding: '2px 8px',
      borderRadius: 'var(--radius-md)',
      background: hover ? 'var(--brand-50)' : 'var(--gray-100)',
      transition: 'all 0.2s'
    }
  }, item.code))) : React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      paddingLeft: 4,
      minWidth: 0
    }
  }, React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-button)',
      color: 'var(--gray-900)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title ?? item.name ?? '--'), subtitle && React.createElement('div', {
    style: {
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--gray-500)',
      marginTop: 2
    }
  }, subtitle)), right, onDelete && React.createElement(DeleteButton, {
    onClick: onDelete
  }))), showActiveBadge && React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginLeft: 16,
      flexShrink: 0
    }
  }, React.createElement(__ds_scope.Tag, {
    label: active ? 'Active' : 'Inactive',
    variant: active ? 'success' : 'danger',
    style: {
      padding: '6px 12px',
      minWidth: 70,
      justifyContent: 'center'
    }
  })));
}
Object.assign(__ds_scope, { ListCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ListCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/* Mirrors TkSelect + TkSelectOption. Trigger: 1px gray-300 border, 4px radius, 10px 14px padding, min-h 38 (40 with border),
   text 14px semibold gray-700 (grayPlaceholder → 14px regular gray-400), chevron gray-700 rotating 0.3s.
   Dropdown: 8px offset, gray-300 border, 4px radius, shadow-sm; header py-3 px-4 border-b; body p-2; footer p-2 border-t.
   Options: 8px 10px, 6px radius, mb 2px, 14px semibold gray-800, hover/selected bg gray-50, 20px check on the right. */
const norm = o => typeof o === 'string' || typeof o === 'number' ? {
  value: o,
  label: String(o)
} : o;
/** TkSelect. onChange receives the value (array when multiple). `footer` may be a node or (close) => node. */
function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Select',
  label,
  multiple = false,
  checkbox = false,
  showBadge,
  filterable = false,
  clearable = false,
  optionsLabel,
  showHeader = true,
  grayPlaceholder = false,
  disabled = false,
  hasErrors = false,
  messages,
  prefix,
  height,
  footer,
  onClose,
  dropdownWidth,
  dropdownAlign = 'left',
  renderOption,
  style,
  dropdownStyle
}) {
  const opts = options.map(norm);
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [inner, setInner] = React.useState(value ?? (multiple ? [] : null));
  const val = value !== undefined ? value : inner;
  const ref = React.useRef(null);
  const close = React.useCallback(() => {
    setOpen(false);
    setQ('');
    onClose && onClose();
  }, [onClose]);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) close();
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open, close]);
  const set = v => {
    setInner(v);
    onChange && onChange(v);
  };
  const pick = o => {
    if (o.disabled) return;
    if (multiple) {
      const a = val || [];
      set(a.includes(o.value) ? a.filter(x => x !== o.value) : [...a, o.value]);
    } else {
      set(o.value);
      if (!footer) close();
    }
  };
  const count = multiple ? (val || []).length : 0;
  const sel = !multiple && opts.find(o => o.value === val);
  const empty = multiple ? count === 0 : !sel;
  const badge = showBadge ?? !checkbox;
  const text = label ?? (multiple ? !checkbox && count ? optionsLabel || placeholder : placeholder : sel ? sel.label : placeholder);
  const shown = opts.filter(o => !q || (o.label + '').toLowerCase().includes(q.toLowerCase()));
  const ringC = hasErrors ? 'var(--error-600)' : 'var(--focus-ring-input)';
  const minH = height ? height - 2 : 38;
  const msg = Array.isArray(messages) ? messages.join(', ') : messages;
  const faint = empty && grayPlaceholder && !label;
  return React.createElement('div', {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('div', {
    ref,
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      border: '1px solid ' + (hasErrors ? 'var(--error-600)' : 'var(--gray-300)'),
      borderRadius: 'var(--radius-sm)',
      boxShadow: open ? '0 0 0 2px ' + ringC : 'none',
      userSelect: 'none',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, prefix && React.createElement('div', {
    style: {
      alignSelf: 'stretch',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      borderRight: '1px solid var(--gray-300)',
      color: disabled ? 'var(--gray-400)' : 'var(--gray-600)',
      font: 'var(--text-body)',
      whiteSpace: 'nowrap'
    }
  }, prefix), React.createElement('div', {
    tabIndex: disabled ? undefined : 0,
    onClick: () => {
      if (disabled) return;
      open ? close() : setOpen(true);
    },
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!disabled) open ? close() : setOpen(true);
      }
    },
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
      minHeight: minH,
      padding: '0 14px',
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'var(--gray-100)' : '#fff',
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      boxSizing: 'border-box'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flex: 1,
      minWidth: 0
    }
  }, multiple && badge && count > 0 && React.createElement(__ds_scope.Tag, {
    label: String(count),
    variant: 'primary',
    isBadge: true,
    style: {
      padding: '2px 6px'
    }
  }), React.createElement('div', {
    style: {
      font: faint ? 'var(--text-body)' : 'var(--text-button)',
      color: disabled ? 'var(--gray-400)' : faint ? 'var(--gray-400)' : 'var(--gray-700)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, text)), clearable && !empty && !disabled ? React.createElement('span', {
    onClick: e => {
      e.stopPropagation();
      set(multiple ? [] : null);
    },
    style: {
      display: 'flex',
      color: 'var(--gray-500)',
      cursor: 'pointer'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x-close'
  })) : React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    color: disabled ? 'var(--gray-400)' : 'var(--gray-700)',
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.3s'
    }
  })), open && React.createElement('div', {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      [dropdownAlign === 'right' ? 'right' : 'left']: -1,
      width: dropdownWidth || 'calc(100% + 2px)',
      background: '#fff',
      border: '1px solid var(--gray-300)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-sm)',
      zIndex: 9999,
      boxSizing: 'border-box',
      ...dropdownStyle
    }
  }, optionsLabel && showHeader && React.createElement('div', {
    style: {
      borderBottom: '1px solid var(--gray-300)',
      font: 'var(--text-button)',
      color: 'var(--gray-900)',
      padding: '12px 16px'
    }
  }, optionsLabel), React.createElement('div', {
    style: {
      padding: 8
    }
  }, filterable && React.createElement('div', {
    style: {
      padding: '8px 0'
    }
  }, React.createElement(__ds_scope.Input, {
    prefixIcon: 'search-lg',
    placeholder: 'Search...',
    value: q,
    onChange: e => setQ(e.target.value)
  })), React.createElement('div', {
    style: {
      maxHeight: 240,
      overflowY: 'auto'
    }
  }, shown.length === 0 ? React.createElement('div', {
    style: {
      font: 'var(--text-body)',
      color: 'var(--gray-500)',
      textAlign: 'center',
      padding: '8px 16px'
    }
  }, 'No Data') : shown.map(o => React.createElement(Option, {
    key: o.value,
    o,
    checkbox: checkbox || false,
    selected: multiple ? (val || []).includes(o.value) : val === o.value,
    onPick: () => pick(o),
    renderOption
  })))), footer && React.createElement('div', {
    style: {
      padding: 8,
      borderTop: '1px solid var(--gray-300)'
    }
  }, typeof footer === 'function' ? footer(close) : footer))), msg && React.createElement('div', {
    style: {
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--error-600)',
      marginTop: 4
    }
  }, msg));
}
function Option({
  o,
  checkbox,
  selected,
  onPick,
  renderOption
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    tabIndex: 0,
    onClick: onPick,
    onKeyDown: e => e.key === 'Enter' && onPick(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      padding: '8px 10px',
      marginBottom: 2,
      borderRadius: 'var(--radius-md)',
      font: 'var(--text-button)',
      color: o.disabled ? 'var(--gray-400)' : 'var(--gray-800)',
      background: selected && !checkbox || hover && !o.disabled || o.disabled ? 'var(--gray-50)' : 'transparent',
      cursor: o.disabled ? 'not-allowed' : 'pointer',
      transition: 'background-color var(--transition-color)',
      outline: 'none'
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, checkbox && React.createElement(__ds_scope.Checkbox, {
    checked: selected,
    style: {
      pointerEvents: 'none'
    }
  }), React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0,
      paddingRight: 16,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, renderOption ? renderOption(o) : o.label, o.sublabel && React.createElement('div', {
    style: {
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--gray-400)'
    }
  }, o.sublabel)), selected && !checkbox && React.createElement('span', {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 25,
      display: 'inline-flex',
      justifyContent: 'center'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'check'
  }))));
}
/** CLM FilterSelect / StatusFilter: TkSelect with the label always shown, badge count, checkboxes, and a Clear / Apply footer.
 *  Selection is staged; onApply fires with the new value, closing without Apply reverts (revertChangesOnClose). */
function FilterSelect({
  label,
  options = [],
  value,
  onApply,
  onClear,
  multiple = true,
  filterable = false,
  clearLabel = 'Clear Filter',
  height = 40,
  dropdownWidth = 250,
  dropdownAlign = 'right',
  renderOption,
  style
}) {
  const [draft, setDraft] = React.useState(value ?? (multiple ? [] : null));
  React.useEffect(() => setDraft(value ?? (multiple ? [] : null)), [JSON.stringify(value)]);
  const btn = (v, l, fn) => React.createElement(__ds_scope.Button, {
    variant: v,
    fullWidth: true,
    onClick: fn
  }, l);
  return React.createElement(Select, {
    label,
    options,
    value: draft,
    onChange: setDraft,
    multiple,
    checkbox: multiple,
    showBadge: multiple,
    filterable,
    optionsLabel: label,
    showHeader: false,
    height,
    dropdownWidth,
    dropdownAlign,
    renderOption,
    style,
    onClose: () => setDraft(value ?? (multiple ? [] : null)),
    footer: close => React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12
      }
    }, btn('secondary', clearLabel, () => {
      onClear && onClear();
      close();
    }), btn('primary', 'Apply', () => {
      onApply && onApply(draft);
      close();
    }))
  });
}
Object.assign(__ds_scope, { Select, FilterSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
/* Mirrors TkPLMSPagination: py-3 px-6, 14px medium gray-800; right group gap-10: "Rows per page:" + TkSelect,
   "1–50 of 158", then prev (32px, gray-500) + page TkSelect + next. */
function Arrow({
  name,
  disabled,
  onClick
}) {
  return React.createElement('button', {
    type: 'button',
    disabled,
    onClick,
    'aria-label': name === 'chevron-left' ? 'Previous page' : 'Next page',
    style: {
      width: 32,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'none',
      color: 'var(--gray-500)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement(__ds_scope.Icon, {
    name
  }));
}
/** TkPLMSPagination. pagination: {page, page_size, total_items, total_pages}. */
function Pagination({
  pagination,
  itemsPerPageOptions = [50, 100, 200, 500],
  onPageChange,
  onSizeChange,
  selectedRows = 0,
  showSelect = true,
  style
}) {
  const {
    page = 1,
    page_size = 50,
    total_items = 0,
    total_pages = 1
  } = pagination || {};
  const start = total_items ? (page - 1) * page_size + 1 : 0,
    end = Math.min(page * page_size, total_items);
  const pages = Array.from({
    length: Math.max(1, total_pages)
  }, (_, i) => i + 1);
  return React.createElement('div', {
    style: {
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40,
      font: 'var(--text-body-strong)',
      color: 'var(--gray-800)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, selectedRows > 0 && React.createElement('span', {
    style: {
      width: '100%'
    }
  }, 'Selected: ' + selectedRows), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 40
    }
  }, showSelect && React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement('span', null, 'Rows per page:'), React.createElement(__ds_scope.Select, {
    options: itemsPerPageOptions,
    value: page_size,
    onChange: onSizeChange,
    dropdownWidth: 120,
    style: {
      width: 72
    },
    dropdownStyle: {
      bottom: 'calc(100% + 8px)',
      top: 'auto'
    }
  })), React.createElement('span', null, `${start}–${end} of ${total_items}`), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Arrow, {
    name: 'chevron-left',
    disabled: page === 1,
    onClick: () => onPageChange && onPageChange(page - 1)
  }), React.createElement(__ds_scope.Select, {
    options: pages,
    value: page,
    onChange: onPageChange,
    dropdownWidth: 120,
    style: {
      width: 62
    },
    dropdownAlign: 'right',
    dropdownStyle: {
      bottom: 'calc(100% + 8px)',
      top: 'auto'
    }
  }), React.createElement(Arrow, {
    name: 'chevron-right',
    disabled: page >= total_pages,
    onClick: () => onPageChange && onPageChange(page + 1)
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
/* Mirrors TkToggle: medium w-11 h-6 (44×24), knob 20px with 2px margin; on bg #1199D6, off bg gray-400; 0.3s. */
const SZ = {
  small: [36, 20, 16],
  medium: [44, 24, 20],
  large: [52, 28, 24]
};
/** TkToggle. onChange receives the next boolean. */
function Toggle({
  checked = false,
  onChange,
  size = 'medium',
  disabled = false,
  label,
  labelSide = 'right',
  style
}) {
  const [w, h, k] = SZ[size] || SZ.medium;
  const flip = () => !disabled && onChange && onChange(!checked);
  const lbl = label && React.createElement('label', {
    style: {
      font: 'var(--text-body)',
      color: 'var(--gray-700)',
      [labelSide === 'left' ? 'marginRight' : 'marginLeft']: labelSide === 'left' ? 20 : 12
    }
  }, label);
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, labelSide === 'left' && lbl, React.createElement('div', {
    role: 'switch',
    'aria-checked': String(!!checked),
    tabIndex: 0,
    onClick: flip,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flip();
      }
    },
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: w,
      height: h,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      flexShrink: 0
    }
  }, React.createElement('div', {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 9999,
      background: checked ? '#1199D6' : 'var(--gray-400)',
      transition: 'background-color 0.3s'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      marginLeft: 2,
      width: k,
      height: k,
      borderRadius: 9999,
      background: '#fff',
      transform: checked ? 'translateX(100%)' : 'translateX(0)',
      transition: 'transform 0.3s'
    }
  })), labelSide !== 'left' && lbl);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/forms/UploadFile.jsx
try { (() => {
/* Mirrors hk-clm-ui components/helpers/tk-components/TkUploadFile.vue: drop zone p-8, 1px border gray-300 (hover gray-400,
   dragging brand-500 + brand-50, error error-300), rounded-lg; upload icon gray-400; "Click to upload" 14px semibold brand-600 +
   "or drag and drop" gray-600; "TTF files only (max 10 MB)" 12px gray-500. File row: p-3 white border gray-200 rounded-lg,
   40px colored extension tile, name 14px medium gray-700, size 12px gray-500 "– N% uploaded", ring progress → check, x-close remove. */
const fmt = b => {
  if (!b) return '0 B';
  const k = 1024,
    s = ['B', 'KB', 'MB', 'GB'],
    i = Math.floor(Math.log(b) / Math.log(k));
  return `${parseFloat((b / Math.pow(k, i)).toFixed(1))} ${s[i]}`;
};
const EXT_BG = {
  TTF: '#7a5af8',
  OTF: '#6938ef',
  WOFF: '#6172f3',
  WOFF2: '#444ce7',
  PDF: '#f04438',
  PNG: '#17b26a',
  JPG: '#fdb022',
  JPEG: '#fdb022',
  SVG: '#ef6820'
};
function Ring({
  p
}) {
  const c = 2 * Math.PI * 10;
  return React.createElement('svg', {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    style: {
      transform: 'rotate(-90deg)'
    }
  }, React.createElement('circle', {
    r: 10,
    cx: 12,
    cy: 12,
    fill: 'none',
    strokeWidth: 2,
    stroke: 'var(--gray-200)'
  }), React.createElement('circle', {
    r: 10,
    cx: 12,
    cy: 12,
    fill: 'none',
    strokeWidth: 2,
    stroke: 'var(--brand-500)',
    strokeDasharray: `${c} ${c * (100 - p) / 100}`
  }));
}
/** CLM TkUploadFile. onChange receives the file object {name,size,progress,file} (array when allowMultiple) or null. */
const UploadFile = React.forwardRef(function UploadFile({
  acceptedTypes = ['.ttf'],
  maxFileSize = 10 * 1024 * 1024,
  allowMultiple = false,
  showProgress = true,
  required = false,
  errorMessage = 'File is required',
  onChange,
  onReject,
  style
}, ref) {
  const [drag, setDrag] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const [err, setErr] = React.useState(false);
  const input = React.useRef(null);
  const typesText = acceptedTypes.map(t => t.replace('.', '').toUpperCase()).join(', ') + ' files only';
  const emit = list => onChange && onChange(allowMultiple ? list : list[0] || null);
  React.useImperativeHandle(ref, () => ({
    validate: () => {
      const bad = required && files.length === 0;
      setErr(bad);
      return !bad;
    }
  }), [files, required]);
  const process = list => {
    setErr(false);
    const ok = list.filter(f => {
      if (f.size > maxFileSize) {
        onReject && onReject('File Too Large', `File size cannot exceed ${fmt(maxFileSize)}`);
        return false;
      }
      if (!acceptedTypes.some(t => f.name.toLowerCase().endsWith(t.toLowerCase()))) {
        onReject && onReject('Invalid File Type', `Only ${acceptedTypes.map(t => t.replace('.', '').toUpperCase()).join(', ')} files are allowed`);
        return false;
      }
      return true;
    }).map(f => ({
      id: Date.now() + Math.random(),
      name: f.name.replace(/[^\w.\- ]+/g, '_'),
      size: f.size,
      progress: showProgress ? 0 : 100,
      file: f
    }));
    if (!ok.length) return;
    setFiles(prev => {
      const next = allowMultiple ? [...prev, ...ok] : [ok[0]];
      emit(next);
      return next;
    });
    if (showProgress) ok.forEach(fo => {
      let p = 0;
      const iv = setInterval(() => {
        p = Math.min(100, p + Math.random() * 30);
        setFiles(fs => fs.map(x => x.id === fo.id ? {
          ...x,
          progress: Math.round(p)
        } : x));
        if (p >= 100) clearInterval(iv);
      }, 500);
    });
  };
  const remove = f => setFiles(fs => {
    const next = fs.filter(x => x.id !== f.id);
    setErr(false);
    emit(next);
    return next;
  });
  const bd = drag ? 'var(--brand-500)' : err ? hover ? 'var(--error-400)' : 'var(--error-300)' : hover ? 'var(--gray-400)' : 'var(--gray-300)';
  return React.createElement('div', {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('div', {
    role: 'button',
    tabIndex: 0,
    onClick: () => input.current.click(),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        input.current.click();
      }
    },
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setDrag(false);
    },
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      process(Array.from(e.dataTransfer.files));
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      padding: 32,
      border: '1px solid ' + bd,
      borderRadius: 'var(--radius-lg)',
      background: drag ? 'var(--brand-50)' : '#fff',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      boxSizing: 'border-box'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'upload-cloud-01',
    color: 'var(--gray-400)',
    style: {
      marginBottom: 8
    }
  }), React.createElement('p', {
    style: {
      margin: 0,
      font: 'var(--text-body)'
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--brand-600)',
      fontWeight: 600
    }
  }, 'Click to upload'), React.createElement('span', {
    style: {
      color: 'var(--gray-600)',
      marginLeft: 4
    }
  }, 'or drag and drop')), React.createElement('p', {
    style: {
      margin: 0,
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--gray-500)'
    }
  }, `${typesText} (max ${fmt(maxFileSize)})`)), React.createElement('input', {
    ref: input,
    type: 'file',
    accept: acceptedTypes.join(','),
    multiple: allowMultiple,
    'aria-label': 'File upload input',
    style: {
      display: 'none'
    },
    onChange: e => {
      process(Array.from(e.target.files));
      e.target.value = '';
    }
  })), err && React.createElement('p', {
    style: {
      margin: 0,
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--error-600)'
    }
  }, errorMessage), files.map(f => {
    const ext = f.name.split('.').pop().toUpperCase();
    return React.createElement('div', {
      key: f.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        background: '#fff',
        border: '1px solid var(--gray-200)',
        borderRadius: 'var(--radius-lg)'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement('div', {
      style: {
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-sm)',
        background: EXT_BG[ext] || 'var(--gray-500)',
        color: '#fff',
        font: '500 12px/16px var(--font-sans)'
      }
    }, ext), React.createElement('div', null, React.createElement('p', {
      style: {
        margin: 0,
        font: 'var(--text-body-strong)',
        color: 'var(--gray-700)',
        maxWidth: 200,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, f.name), React.createElement('p', {
      style: {
        margin: 0,
        font: '400 12px/16px var(--font-sans)',
        color: 'var(--gray-500)'
      }
    }, fmt(f.size), showProgress && ` – ${f.progress}% uploaded`))), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, showProgress && (f.progress < 100 ? React.createElement(Ring, {
      p: f.progress
    }) : React.createElement(__ds_scope.Icon, {
      name: 'check',
      size: 'sm',
      color: 'var(--success-500)'
    })), React.createElement('button', {
      type: 'button',
      'aria-label': 'Remove file',
      onClick: () => remove(f),
      style: {
        padding: 4,
        border: 'none',
        borderRadius: 9999,
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        color: 'var(--gray-400)'
      }
    }, React.createElement(__ds_scope.Icon, {
      name: 'x-close',
      size: 'sm'
    }))));
  }));
});
Object.assign(__ds_scope, { UploadFile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/UploadFile.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppHeader.jsx
try { (() => {
/* Mirrors hk-clm-ui Header.vue: bg var(--tk-bg-header) #154273, h-[54px], px-10, CLM logo left,
   TkPrimaryNav (empty in CLM today) in the middle, user name (white, capitalized) + TkUserDropdown chevron on the right. */
const LOGO = "<svg width=\"81\" height=\"28\" viewBox=\"0 0 81 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M33.368 12.432C33.4693 12.432 33.5573 12.472 33.632 12.552L34.376 13.36C33.9067 13.9253 33.3307 14.3627 32.648 14.672C31.9653 14.976 31.1493 15.128 30.2 15.128C29.3573 15.128 28.5947 14.984 27.912 14.696C27.2347 14.4027 26.656 13.9973 26.176 13.48C25.696 12.9573 25.3253 12.336 25.064 11.616C24.808 10.896 24.68 10.104 24.68 9.23999C24.68 8.37599 24.816 7.58399 25.088 6.86399C25.3653 6.13866 25.752 5.51732 26.248 4.99999C26.7493 4.47732 27.3467 4.07199 28.04 3.78399C28.7387 3.49599 29.5067 3.35199 30.344 3.35199C31.176 3.35199 31.9093 3.48799 32.544 3.75999C33.184 4.02666 33.7387 4.38399 34.208 4.83199L33.592 5.70399C33.5493 5.76266 33.4987 5.81332 33.44 5.85599C33.3813 5.89866 33.3013 5.91999 33.2 5.91999C33.0933 5.91999 32.9707 5.87199 32.832 5.77599C32.6987 5.67466 32.5253 5.56532 32.312 5.44799C32.104 5.32532 31.84 5.21599 31.52 5.11999C31.2053 5.01866 30.8107 4.96799 30.336 4.96799C29.7867 4.96799 29.2827 5.06399 28.824 5.25599C28.3653 5.44799 27.9707 5.72799 27.64 6.09599C27.3093 6.46399 27.0507 6.91199 26.864 7.43999C26.6827 7.96799 26.592 8.56799 26.592 9.23999C26.592 9.91732 26.688 10.5227 26.88 11.056C27.072 11.584 27.336 12.032 27.672 12.4C28.008 12.7627 28.4027 13.04 28.856 13.232C29.3093 13.424 29.7973 13.52 30.32 13.52C30.64 13.52 30.9253 13.504 31.176 13.472C31.432 13.4347 31.6667 13.3787 31.88 13.304C32.0933 13.224 32.2933 13.1253 32.48 13.008C32.672 12.8907 32.8613 12.7467 33.048 12.576C33.1547 12.48 33.2613 12.432 33.368 12.432Z\" fill=\"white\"></path> <path d=\"M42.649 13.432V15H35.993V3.47999H37.865V13.432H42.649Z\" fill=\"white\"></path> <path d=\"M56.5146 3.47999V15H54.8666V7.10399C54.8666 6.97599 54.8693 6.83732 54.8746 6.68799C54.8853 6.53332 54.8986 6.37866 54.9146 6.22399L51.2106 13.064C51.0666 13.3467 50.8453 13.488 50.5466 13.488H50.2826C49.9786 13.488 49.7573 13.3467 49.6186 13.064L45.8586 6.20799C45.8746 6.36266 45.8853 6.51732 45.8906 6.67199C45.9013 6.82666 45.9066 6.97066 45.9066 7.10399V15H44.2586V3.47999H45.6586C45.824 3.47999 45.952 3.49599 46.0426 3.52799C46.1333 3.55466 46.216 3.64266 46.2906 3.79199L49.9866 10.488C50.0666 10.6427 50.1413 10.8027 50.2106 10.968C50.2853 11.128 50.352 11.2933 50.4106 11.464C50.4746 11.2933 50.5413 11.1253 50.6106 10.96C50.6853 10.7893 50.7626 10.6267 50.8426 10.472L54.4826 3.79199C54.5573 3.64266 54.64 3.55466 54.7306 3.52799C54.8213 3.49599 54.9493 3.47999 55.1146 3.47999H56.5146Z\" fill=\"white\"></path> <path d=\"M80.3943 22.0657L78.0394 27.5547C78.0087 27.619 77.971 27.6693 77.9263 27.7056C77.8844 27.7419 77.8187 27.7601 77.7294 27.7601H77.0631L77.8509 26.0505L76.1078 22.0657H76.8913C76.9667 22.0657 77.024 22.0838 77.0631 22.1202C77.105 22.1537 77.1358 22.1942 77.1553 22.2417L78.1735 24.6677C78.1986 24.7376 78.221 24.8074 78.2405 24.8773C78.2629 24.9443 78.2838 25.0141 78.3034 25.0868C78.3257 25.0141 78.3481 24.9429 78.3704 24.8731C78.3928 24.8032 78.4179 24.7334 78.4459 24.6636L79.4222 22.2417C79.4417 22.1914 79.4738 22.1495 79.5185 22.116C79.566 22.0824 79.6177 22.0657 79.6736 22.0657H80.3943Z\" fill=\"white\"></path> <path d=\"M75.0681 23.7206C75.0681 23.5698 75.0458 23.4301 75.0011 23.3016C74.9592 23.1703 74.8963 23.0572 74.8125 22.9622C74.7287 22.8644 74.624 22.789 74.4983 22.736C74.3754 22.6801 74.2329 22.6521 74.0709 22.6521C73.7441 22.6521 73.4871 22.7457 73.2999 22.9329C73.1128 23.12 72.994 23.3826 72.9438 23.7206H75.0681ZM72.9186 24.2737C72.9298 24.5168 72.9675 24.7277 73.0318 24.9064C73.096 25.0824 73.1812 25.2291 73.2874 25.3464C73.3963 25.4637 73.5248 25.5517 73.6728 25.6104C73.8237 25.6662 73.9913 25.6942 74.1757 25.6942C74.3516 25.6942 74.5039 25.6746 74.6324 25.6355C74.7609 25.5936 74.8726 25.5489 74.9676 25.5014C75.0626 25.4511 75.1436 25.4065 75.2106 25.3673C75.2777 25.3254 75.3391 25.3045 75.395 25.3045C75.4676 25.3045 75.5235 25.3324 75.5626 25.3883L75.8182 25.7193C75.712 25.845 75.5919 25.9512 75.4578 26.0378C75.3237 26.1244 75.1813 26.1956 75.0304 26.2515C74.8796 26.3045 74.7246 26.3422 74.5653 26.3646C74.4061 26.3897 74.2511 26.4023 74.1002 26.4023C73.8041 26.4023 73.529 26.3534 73.2748 26.2557C73.0234 26.1551 72.8041 26.0084 72.6169 25.8157C72.4326 25.6229 72.2873 25.3841 72.1812 25.0992C72.0778 24.8143 72.0261 24.486 72.0261 24.1145C72.0261 23.8184 72.0722 23.5419 72.1644 23.2849C72.2594 23.0279 72.3935 22.8044 72.5667 22.6144C72.7426 22.4245 72.9549 22.275 73.2035 22.1661C73.455 22.0544 73.7385 21.9985 74.0541 21.9985C74.3167 21.9985 74.5597 22.0418 74.7832 22.1284C75.0067 22.2122 75.1994 22.3365 75.3615 22.5013C75.5235 22.6661 75.6492 22.8686 75.7386 23.1089C75.8307 23.3463 75.8768 23.6173 75.8768 23.9218C75.8768 24.0614 75.8615 24.155 75.8307 24.2025C75.8 24.25 75.7441 24.2737 75.6631 24.2737H72.9186Z\" fill=\"white\"></path> <path d=\"M68.0694 22.8869H68.3501C68.4563 22.8869 68.5429 22.873 68.6099 22.845C68.677 22.8143 68.737 22.7668 68.7901 22.7026L70.617 20.5237C70.6812 20.4427 70.7469 20.3868 70.8139 20.3561C70.8837 20.3226 70.9703 20.3058 71.0737 20.3058H71.9117L69.7538 22.8534C69.6952 22.9261 69.6379 22.9875 69.582 23.0378C69.5289 23.0853 69.4703 23.1244 69.406 23.1551C69.4898 23.1858 69.5653 23.2291 69.6323 23.285C69.6993 23.3381 69.765 23.4093 69.8292 23.4987L72.0668 26.3396H71.212C71.1505 26.3396 71.0974 26.3354 71.0527 26.327C71.0108 26.3186 70.9731 26.3061 70.9396 26.2893C70.9089 26.2726 70.881 26.2516 70.8558 26.2265C70.8335 26.2013 70.8125 26.1734 70.793 26.1427L68.9074 23.8381C68.8795 23.8018 68.8515 23.7711 68.8236 23.7459C68.7957 23.7208 68.7622 23.6998 68.723 23.6831C68.6867 23.6663 68.6448 23.6551 68.5973 23.6495C68.5499 23.6412 68.494 23.637 68.4297 23.637H68.0694V26.3396H67.0889V20.3058H68.0694V22.8869Z\" fill=\"white\"></path> <path d=\"M65.8742 20.1382V26.3396H64.9733V20.1382H65.8742Z\" fill=\"white\"></path> <path d=\"M63.3089 23.7206C63.3089 23.5698 63.2865 23.4301 63.2418 23.3016C63.1999 23.1703 63.1371 23.0572 63.0533 22.9622C62.9695 22.8644 62.8647 22.789 62.739 22.736C62.6161 22.6801 62.4736 22.6521 62.3116 22.6521C61.9848 22.6521 61.7278 22.7457 61.5406 22.9329C61.3535 23.12 61.2348 23.3826 61.1845 23.7206H63.3089ZM61.1593 24.2737C61.1705 24.5168 61.2082 24.7277 61.2725 24.9064C61.3367 25.0824 61.4219 25.2291 61.5281 25.3464C61.637 25.4637 61.7655 25.5517 61.9136 25.6104C62.0644 25.6662 62.232 25.6942 62.4164 25.6942C62.5924 25.6942 62.7446 25.6746 62.8731 25.6355C63.0016 25.5936 63.1133 25.5489 63.2083 25.5014C63.3033 25.4511 63.3843 25.4065 63.4513 25.3673C63.5184 25.3254 63.5798 25.3045 63.6357 25.3045C63.7083 25.3045 63.7642 25.3324 63.8033 25.3883L64.0589 25.7193C63.9527 25.845 63.8326 25.9512 63.6985 26.0378C63.5645 26.1244 63.422 26.1956 63.2712 26.2515C63.1203 26.3045 62.9653 26.3422 62.8061 26.3646C62.6468 26.3897 62.4918 26.4023 62.341 26.4023C62.0449 26.4023 61.7697 26.3534 61.5155 26.2557C61.2641 26.1551 61.0448 26.0084 60.8577 25.8157C60.6733 25.6229 60.528 25.3841 60.4219 25.0992C60.3185 24.8143 60.2668 24.486 60.2668 24.1145C60.2668 23.8184 60.3129 23.5419 60.4051 23.2849C60.5001 23.0279 60.6342 22.8044 60.8074 22.6144C60.9834 22.4245 61.1957 22.275 61.4443 22.1661C61.6957 22.0544 61.9792 21.9985 62.2949 21.9985C62.5574 21.9985 62.8005 22.0418 63.0239 22.1284C63.2474 22.2122 63.4402 22.3365 63.6022 22.5013C63.7642 22.6661 63.8899 22.8686 63.9793 23.1089C64.0715 23.3463 64.1176 23.6173 64.1176 23.9218C64.1176 24.0614 64.1022 24.155 64.0715 24.2025C64.0407 24.25 63.9849 24.2737 63.9039 24.2737H61.1593Z\" fill=\"white\"></path> <path d=\"M58.8473 26.4066C58.4925 26.4066 58.2188 26.3075 58.026 26.1091C57.8361 25.908 57.7411 25.6259 57.7411 25.2627V22.7738H57.2718C57.2215 22.7738 57.1782 22.7584 57.1419 22.7277C57.1056 22.6942 57.0874 22.6453 57.0874 22.5811V22.2165L57.7788 22.116L57.9757 20.8799C57.9897 20.8324 58.0134 20.7947 58.047 20.7667C58.0805 20.736 58.1252 20.7207 58.181 20.7207H58.642V22.1243H59.8278V22.7738H58.642V25.1999C58.642 25.3535 58.6797 25.4708 58.7551 25.5519C58.8305 25.6329 58.9311 25.6734 59.0568 25.6734C59.1266 25.6734 59.1867 25.665 59.237 25.6482C59.2872 25.6287 59.3305 25.6091 59.3668 25.5896C59.4032 25.5672 59.4339 25.5477 59.459 25.5309C59.487 25.5114 59.5135 25.5016 59.5386 25.5016C59.5889 25.5016 59.6294 25.5295 59.6602 25.5854L59.9283 26.0253C59.7887 26.1483 59.6238 26.2432 59.4339 26.3103C59.2439 26.3745 59.0484 26.4066 58.8473 26.4066Z\" fill=\"white\"></path> <path d=\"M54.6181 21.9985C54.9338 21.9985 55.2187 22.0502 55.4729 22.1535C55.7299 22.2569 55.9478 22.4035 56.1266 22.5935C56.3081 22.7834 56.4478 23.0139 56.5456 23.2849C56.6433 23.5558 56.6922 23.8603 56.6922 24.1983C56.6922 24.5363 56.6433 24.8408 56.5456 25.1117C56.4478 25.3827 56.3081 25.6146 56.1266 25.8073C55.9478 25.9973 55.7299 26.1439 55.4729 26.2473C55.2187 26.3506 54.9338 26.4023 54.6181 26.4023C54.2997 26.4023 54.012 26.3506 53.755 26.2473C53.5008 26.1439 53.2829 25.9973 53.1013 25.8073C52.9197 25.6146 52.7801 25.3827 52.6823 25.1117C52.5845 24.8408 52.5356 24.5363 52.5356 24.1983C52.5356 23.8603 52.5845 23.5558 52.6823 23.2849C52.7801 23.0139 52.9197 22.7834 53.1013 22.5935C53.2829 22.4035 53.5008 22.2569 53.755 22.1535C54.012 22.0502 54.2997 21.9985 54.6181 21.9985ZM54.6181 25.6984C55.0036 25.6984 55.2899 25.5699 55.4771 25.3129C55.6671 25.0531 55.762 24.683 55.762 24.2025C55.762 23.722 55.6671 23.3519 55.4771 23.0921C55.2899 22.8295 55.0036 22.6982 54.6181 22.6982C54.2271 22.6982 53.9365 22.8295 53.7466 23.0921C53.5566 23.3519 53.4617 23.722 53.4617 24.2025C53.4617 24.683 53.5566 25.0531 53.7466 25.3129C53.9365 25.5699 54.2271 25.6984 54.6181 25.6984Z\" fill=\"white\"></path> <path d=\"M51.6312 20.3058V26.3396H50.6507V23.6537H47.6212V26.3396H46.6366V20.3058H47.6212V22.9456H50.6507V20.3058H51.6312Z\" fill=\"white\"></path> <path d=\"M44.0007 22.0657L41.6459 27.5547C41.6152 27.619 41.5775 27.6693 41.5328 27.7056C41.4909 27.7419 41.4252 27.7601 41.3358 27.7601H40.6696L41.4573 26.0505L39.7143 22.0657H40.4978C40.5732 22.0657 40.6305 22.0838 40.6696 22.1202C40.7115 22.1537 40.7422 22.1942 40.7618 22.2417L41.78 24.6677C41.8051 24.7376 41.8275 24.8074 41.847 24.8773C41.8694 24.9443 41.8903 25.0141 41.9099 25.0868C41.9322 25.0141 41.9546 24.9429 41.9769 24.8731C41.9993 24.8032 42.0244 24.7334 42.0523 24.6636L43.0286 22.2417C43.0482 22.1914 43.0803 22.1495 43.125 22.116C43.1725 22.0824 43.2242 22.0657 43.28 22.0657H44.0007Z\" fill=\"white\"></path> <path d=\"M37.1956 25.5644C37.4163 25.5644 37.6021 25.5393 37.7529 25.489C37.9065 25.4359 38.0308 25.3647 38.1258 25.2753C38.2236 25.1859 38.2934 25.0812 38.3353 24.9611C38.38 24.8381 38.4024 24.7069 38.4024 24.5672C38.4024 24.2823 38.3046 24.0588 38.1091 23.8968C37.9163 23.732 37.6104 23.6495 37.1914 23.6495H35.9805V25.5644H37.1956ZM35.9805 21.0726V22.9582H36.961C37.38 22.9582 37.6928 22.8772 37.8996 22.7151C38.1063 22.5531 38.2096 22.3199 38.2096 22.0154C38.2096 21.683 38.1119 21.4427 37.9163 21.2947C37.7236 21.1466 37.4205 21.0726 37.0071 21.0726H35.9805ZM37.0071 20.3058C37.3926 20.3058 37.7222 20.3435 37.9959 20.419C38.2697 20.4916 38.4945 20.5963 38.6705 20.7332C38.8465 20.8701 38.975 21.0377 39.056 21.236C39.1398 21.4316 39.1817 21.6523 39.1817 21.8981C39.1817 22.0405 39.1594 22.1788 39.1147 22.3129C39.0728 22.4442 39.0057 22.5685 38.9136 22.6858C38.8242 22.8003 38.711 22.9037 38.5742 22.9959C38.4373 23.0881 38.2753 23.1649 38.0881 23.2263C38.9429 23.4079 39.3703 23.8618 39.3703 24.5881C39.3703 24.8451 39.3214 25.0812 39.2236 25.2963C39.1287 25.5086 38.989 25.6929 38.8046 25.8494C38.623 26.003 38.3982 26.1231 38.13 26.2097C37.8618 26.2963 37.556 26.3396 37.2124 26.3396H35V20.3058H37.0071Z\" fill=\"white\"></path> <path d=\"M0 0H1.13419V15.5539H0V0Z\" fill=\"white\"></path> <path d=\"M19.2269 3.26812e-05V1.13423L0.000631283 1.13423L0 0L19.2269 3.26812e-05Z\" fill=\"white\"></path> <path d=\"M19.2269 3.26812e-05H20.3611V15.5539H19.2269V3.26812e-05Z\" fill=\"white\"></path> <path d=\"M0 15.2704H20.3605V20.3605H0V15.2704Z\" fill=\"white\"></path> <path d=\"M15.304 2.34399V14H12.584V9.07199H7.848V14H5.128V2.34399H7.848V7.21599H12.584V2.34399H15.304Z\" fill=\"white\"></path> </svg>";
function NavTab({
  label,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('button', {
    type: 'button',
    'aria-current': active ? 'page' : undefined,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '10px 14px',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-button)',
      cursor: 'pointer',
      background: active || hover ? '#fff' : 'transparent',
      color: active ? 'var(--brand-800)' : hover ? '#154273' : '#fff',
      transition: 'color var(--transition-color),background-color var(--transition-color)',
      whiteSpace: 'nowrap'
    }
  }, label);
}
/** CLM app header. Pass tabs only if the primary nav has items (CLM ships it empty). */
function AppHeader({
  user = 'Afnas K P',
  tabs = [],
  activeTab,
  onTabChange,
  onUserMenu,
  style
}) {
  const items = tabs.map(t => typeof t === 'string' ? {
    label: t,
    to: t
  } : t);
  return React.createElement('div', {
    style: {
      background: 'var(--navy)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 40px',
      height: 54,
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer'
    },
    dangerouslySetInnerHTML: {
      __html: LOGO
    }
  }), React.createElement('nav', {
    'aria-label': 'Primary navigation',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      flex: 1,
      justifyContent: 'center',
      marginRight: 8
    }
  }, items.map(it => React.createElement(NavTab, {
    key: it.to,
    label: it.label,
    active: it.to === activeTab,
    onClick: () => onTabChange && onTabChange(it.to)
  }))), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement('span', {
    style: {
      color: '#fff',
      textTransform: 'capitalize',
      font: '500 16px/24px var(--font-sans)'
    }
  }, (user || '').toLowerCase()), React.createElement('button', {
    type: 'button',
    'aria-label': 'User menu',
    onClick: onUserMenu,
    style: {
      display: 'flex',
      padding: 10,
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevron-down'
  }))));
}
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PageHeader.jsx
try { (() => {
/* Mirrors hk-clm-ui components/helpers/tk-components/PageHeader.vue: 4×32px bar (gradient brand-500→brand-600, rounded-full),
   title h4 24px bold gray-900, count pill ml-2 px-3 py-1 brand-50 rounded-full with 14px semibold brand-700; gap-3; mb-3 by default. */
/** CLM page header. Children render in the right-hand slot (buttons, filters). */
function PageHeader({
  title,
  count,
  showMargin = true,
  actions,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      width: '100%',
      marginBottom: showMargin ? 12 : 0,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      width: 4,
      height: 32,
      borderRadius: 9999,
      background: 'linear-gradient(to bottom, var(--brand-500), var(--brand-600))'
    }
  }), React.createElement('h4', {
    style: {
      margin: 0,
      font: 'var(--text-page-title)',
      color: 'var(--gray-900)'
    }
  }, title), count != null && React.createElement('div', {
    style: {
      marginLeft: 8,
      padding: '4px 12px',
      background: 'var(--brand-50)',
      borderRadius: 9999
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-button)',
      color: 'var(--brand-700)'
    }
  }, count))), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, actions, children));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SearchFilterBar.jsx
try { (() => {
/* Mirrors hk-clm-ui TkSearchFilterBar.vue + StatusFilter.vue: mt-3 row, gap-3; TkInput flex-1 min-w 300, 42px, search suffix, clearable;
   extra slot; StatusFilter (TkSelect multiple/checkbox/badge, min-w 100, 42px, Clear / Apply footer, defaults to [Active]);
   primary "Add New" 42px. */
const STATUS = [{
  label: 'Active',
  value: 'active'
}, {
  label: 'Inactive',
  value: 'inactive'
}];
/** CLM list-page search bar. */
function SearchFilterBar({
  search,
  onSearchChange,
  placeholder = 'Search Items by Name or Code',
  showStatusFilter = true,
  status,
  onStatusChange,
  statusLabels = STATUS,
  filterTitle = 'Status',
  showAddBtn = true,
  btnLabel = 'Add New',
  onCreate,
  disabled = false,
  children,
  style
}) {
  const def = [statusLabels[0].value];
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      marginTop: 12,
      width: '100%',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 12,
      flex: 1,
      minWidth: 0
    }
  }, React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 300
    }
  }, React.createElement(__ds_scope.Input, {
    value: search ?? '',
    onChange: onSearchChange,
    placeholder,
    suffixIcon: 'search-lg',
    clearable: true,
    onClear: () => onSearchChange && onSearchChange({
      target: {
        value: ''
      }
    }),
    style: {
      height: 42,
      font: 'var(--text-body)'
    }
  })), children, showStatusFilter && React.createElement(__ds_scope.FilterSelect, {
    label: filterTitle,
    options: statusLabels,
    value: status ?? def,
    height: 42,
    dropdownWidth: 200,
    dropdownAlign: 'left',
    clearLabel: 'Clear',
    onApply: v => onStatusChange && onStatusChange(v),
    onClear: () => onStatusChange && onStatusChange(def),
    style: {
      minWidth: 100
    }
  })), showAddBtn && React.createElement(__ds_scope.Button, {
    variant: 'primary',
    disabled,
    onClick: onCreate,
    style: {
      height: 42,
      flex: 'none'
    }
  }, btnLabel));
}
Object.assign(__ds_scope, { SearchFilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SearchFilterBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
/* Mirrors TkSideNav: navy #154273, py-4, 12px gap; each row = 5px indicator (#1199D6 when active) + 11px gap + ghost button
   (px-2 py-1.5, 6px radius, white 14px semibold, 8px icon gap, hover/active bg #1199D6); 24px right padding. */
const DEFAULT_ICONS = {
  Requests: 'requests',
  'Template Groups': 'layout-alt-04',
  Tags: 'tag',
  'Template Group Types': 'dotpoints-01',
  'Template Rules': 'settings-01',
  Accounts: 'building-06',
  Fonts: 'text'
};
const CLM_ITEMS = ['Requests', 'Template Groups', 'Tags', 'Template Group Types', 'Template Rules', 'Accounts', 'Fonts'];
function NavItem({
  item,
  active,
  onSelect,
  nested
}) {
  const [hover, setHover] = React.useState(false);
  const on = active === item.to;
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 11
    }
  }, React.createElement('div', {
    style: {
      width: 5,
      flexShrink: 0,
      background: on ? '#1199D6' : 'transparent'
    }
  }), React.createElement('button', {
    type: 'button',
    'aria-current': on ? 'page' : undefined,
    onClick: () => onSelect && onSelect(item.to, item),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 8,
      padding: nested ? '6px 8px 6px 30px' : '6px 8px',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      background: on || hover ? '#1199D6' : 'transparent',
      color: '#fff',
      font: 'var(--text-button)',
      textAlign: 'left',
      cursor: 'pointer',
      transition: 'background-color var(--transition-color)'
    }
  }, item.icon && React.createElement(__ds_scope.Icon, {
    name: item.icon
  }), React.createElement('span', null, item.label), item.options && item.options.length > 0 && React.createElement(__ds_scope.Icon, {
    name: item.expanded ? 'chevron-up' : 'chevron-down',
    style: {
      position: 'absolute',
      right: 8
    }
  })));
}
/** TkSideNav. items: strings or {label, icon, to, options?, expanded?}. */
function SideNav({
  items = CLM_ITEMS,
  active,
  onSelect,
  width = 240,
  style
}) {
  const norm = items.map(it => typeof it === 'string' ? {
    label: it,
    to: it,
    icon: DEFAULT_ICONS[it] || 'dotpoints-01'
  } : it);
  return React.createElement('div', {
    style: {
      background: 'var(--navy)',
      width,
      flexShrink: 0,
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      ...style
    }
  }, React.createElement('nav', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 0',
      gap: 12
    }
  }, norm.map(item => React.createElement('div', {
    key: item.to,
    role: 'listitem',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      paddingRight: 24
    }
  }, React.createElement(NavItem, {
    item,
    active,
    onSelect
  }), item.expanded && (item.options || []).map(o => React.createElement(NavItem, {
    key: o.to,
    item: o,
    active,
    onSelect,
    nested: true
  }))))));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
/* Mirrors TkSidebar as configured in hk-clm-ui DocumentManagementSidebar.vue:
   wrapper py-3 px-2; items gap-1.5; row h-8 (itemMainClass) with container rounded-sm px-1.5 text-sm font-medium;
   active bg-gray-100 text-[#0D7AAB]; hover bg-brand-50 text-brand-600; CLM menu icons recolored to brand via CSS filter. */
const CLM_ICONS = {
  "Requests": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M5 2.91667H11.25L15 6.66667V16.25C15 16.7102 14.6269 17.0833 14.1667 17.0833H5C4.53976 17.0833 4.16667 16.7102 4.16667 16.25V3.75C4.16667 3.28976 4.53976 2.91667 5 2.91667Z\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M11.25 2.91667V6.66667H15\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M10 12.0833V9.58333\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M8.75 10.8333L10 12.0833L11.25 10.8333\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
  "Template Groups": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M3.75 5C3.75 4.53976 4.1231 4.16667 4.58333 4.16667H15.4167C15.8769 4.16667 16.25 4.53976 16.25 5V7.08333C16.25 7.54357 15.8769 7.91667 15.4167 7.91667H4.58333C4.1231 7.91667 3.75 7.54357 3.75 7.08333V5Z\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M3.75 10C3.75 9.53976 4.1231 9.16667 4.58333 9.16667H15.4167C15.8769 9.16667 16.25 9.53976 16.25 10V12.0833C16.25 12.5436 15.8769 12.9167 15.4167 12.9167H4.58333C4.1231 12.9167 3.75 12.5436 3.75 12.0833V10Z\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
  "Tags": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M3.75 9.16667V4.58333C3.75 4.1231 4.1231 3.75 4.58333 3.75H9.16667L16.25 10.8333L10.8333 16.25L3.75 9.16667Z\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <circle cx=\"6.45833\" cy=\"6.45833\" r=\"1.04167\" stroke=\"#414651\" stroke-width=\"2.004\"></circle> </svg>",
  "Template Rules": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M5 2.91667H11.25L15 6.66667V16.25C15 16.7102 14.6269 17.0833 14.1667 17.0833H5C4.53976 17.0833 4.16667 16.7102 4.16667 16.25V3.75C4.16667 3.28976 4.53976 2.91667 5 2.91667Z\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M11.25 2.91667V6.66667H15\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M7.08333 9.16667H11.6667\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M7.08333 12.0833H10\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
  "Template Group Types": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 18 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.91667 3.75C2.91667 3.28976 3.28976 2.91667 3.75 2.91667H9.58333C10.0436 2.91667 10.4167 3.28976 10.4167 3.75V9.58333C10.4167 10.0436 10.0436 10.4167 9.58333 10.4167H3.75C3.28976 10.4167 2.91667 10.0436 2.91667 9.58333V3.75Z\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M10.4167 5.41667H13.75C14.2102 5.41667 14.5833 5.78976 14.5833 6.25V12.0833C14.5833 12.5436 14.2102 12.9167 13.75 12.9167H9.58333\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
  "Accounts": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10 11.25C12.0711 11.25 13.75 9.57107 13.75 7.5C13.75 5.42893 12.0711 3.75 10 3.75C7.92893 3.75 6.25 5.42893 6.25 7.5C6.25 9.57107 7.92893 11.25 10 11.25Z\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M3.75 16.25C3.75 13.7647 6.54416 12.5 10 12.5C13.4558 12.5 16.25 13.7647 16.25 16.25\" stroke=\"#414651\" stroke-width=\"2.004\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
  "Fonts": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M4 15H16\" stroke=\"#414651\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M7 15V5H13V15\" stroke=\"#414651\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M5 5L15 5\" stroke=\"#414651\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>"
};
const CLM_MENU = ['Requests', 'Template Groups', 'Tags', 'Template Rules', 'Template Group Types', 'Accounts', 'Fonts'];
const ACTIVE_FILTER = 'brightness(0) saturate(100%) invert(37%) sepia(45%) saturate(6617%) hue-rotate(178deg) brightness(87%) contrast(90%)';
function Item({
  item,
  selected,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  const on = selected === item.route;
  const svg = item.svg || CLM_ICONS[item.label];
  return React.createElement('div', {
    style: {
      display: 'flex',
      height: 32,
      gap: 12
    }
  }, React.createElement('div', {
    tabIndex: 0,
    role: 'button',
    'aria-current': on ? 'page' : undefined,
    onClick: () => onSelect && onSelect(item.route, item),
    onKeyDown: e => e.key === 'Enter' && onSelect && onSelect(item.route, item),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '0 6px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-body-strong)',
      userSelect: 'none',
      cursor: 'pointer',
      outline: 'none',
      background: on ? 'var(--gray-100)' : hover ? 'var(--brand-50)' : 'transparent',
      color: on ? '#0D7AAB' : hover ? 'var(--brand-600)' : 'var(--gray-900)',
      transition: 'background-color var(--transition-color),color var(--transition-color)'
    }
  }, React.createElement('div', {
    style: {
      flex: 1,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 4px',
      overflow: 'hidden'
    }
  }, svg && React.createElement('span', {
    'aria-hidden': true,
    style: {
      display: 'flex',
      width: 20,
      height: 20,
      flexShrink: 0,
      filter: on || hover ? ACTIVE_FILTER : 'none'
    },
    dangerouslySetInnerHTML: {
      __html: svg
    }
  }), React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, item.label))));
}
/** TkSidebar (white, CLM Admin). items: strings (CLM menu labels) or {label, route, svg?}. */
function Sidebar({
  items = CLM_MENU,
  active,
  onSelect,
  style
}) {
  const norm = items.map(it => typeof it === 'string' ? {
    label: it,
    route: it
  } : it);
  return React.createElement('div', {
    style: {
      padding: '12px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      background: '#fff',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      overflow: 'auto',
      ...style
    }
  }, norm.map(it => React.createElement(Item, {
    key: it.route,
    item: it,
    selected: active,
    onSelect
  })));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Popup.jsx
try { (() => {
/* Mirrors TkPopup as CLM uses it: scrim #0A0D12/70, p-5; container white, 8px radius, shadow-lg; header (headerClass "!py-5 px-6")
   20px 24px + border-b #D5D7DA, title 17px semibold; CLM close-btn (p-2, 8px radius, hover bg gray-100, x-close 16px #A4A7AE rotates 90°);
   content py-5 px-6, max-h 60vh; actions border-t #D5D7DA, p-6, right-aligned, gap-2. */
const WIDTHS = {
  sm: '30rem',
  md: '40rem',
  lg: '62rem'
};
function CloseButton({
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    role: 'button',
    'aria-label': 'Close',
    tabIndex: 0,
    onClick,
    onKeyDown: e => e.key === 'Enter' && onClick && onClick(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: 8,
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer',
      background: hover ? 'rgb(243 244 246)' : 'transparent',
      transition: 'all 200ms',
      display: 'flex'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x-close',
    size: 'sm',
    color: '#A4A7AE',
    style: {
      transform: hover ? 'rotate(90deg)' : 'none',
      transition: 'transform 200ms'
    }
  }));
}
/** TkPopup. width sm 30rem / md 40rem / lg 62rem (CLM uses w-[40rem] and w-[62rem]). */
function Popup({
  open = true,
  width = 'md',
  maxWidth,
  minHeight = '10vh',
  title,
  header,
  children,
  footer,
  actions,
  onClose,
  closeOnOutside = false,
  style,
  contentStyle
}) {
  if (!open) return null;
  const act = actions || footer;
  const hdr = header || title != null && React.createElement('div', {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 35
    }
  }, React.createElement('div', {
    style: {
      font: '600 17px/24px var(--font-sans)',
      color: 'var(--gray-900)'
    }
  }, title), onClose && React.createElement(CloseButton, {
    onClick: onClose
  }));
  return React.createElement('div', {
    onMouseDown: e => {
      if (closeOnOutside && e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      display: 'flex',
      justifyContent: 'center',
      padding: 20,
      overflow: 'auto',
      background: 'var(--overlay-scrim)',
      zIndex: 10,
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box'
    }
  }, React.createElement('div', {
    style: {
      margin: 'auto',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      cursor: 'default',
      width: WIDTHS[width] || width,
      maxWidth: maxWidth || '100%',
      minHeight,
      ...style
    }
  }, hdr && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 24px',
      borderBottom: '1px solid var(--popup-border)',
      color: 'var(--gray-900)'
    }
  }, hdr), React.createElement('div', {
    style: {
      padding: '20px 24px',
      maxHeight: '60vh',
      overflowY: 'auto',
      ...contentStyle
    }
  }, children), act && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: 24,
      borderTop: '1px solid var(--popup-border)'
    }
  }, act)));
}
Object.assign(__ds_scope, { CloseButton, Popup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Popup.jsx", error: String((e && e.message) || e) }); }

// components/overlay/ConfirmDeletePopup.jsx
try { (() => {
/* Mirrors hk-clm-ui components/helpers/ConfirmDeletePopup.vue: 40rem, title "Delete {itemName}" 17px semibold,
   48px error-100 disc with trash-03 error-600, gap-4; "Are you sure you want to delete this <strong>{selectedItem}</strong> {itemName}?";
   actions: Cancel (secondary) + Confirm (primary), min-w 100. */
/** CLM delete confirmation. */
function ConfirmDeletePopup({
  open = true,
  itemType,
  itemName,
  selectedItem,
  customTitle,
  customMessage,
  loading = false,
  onCancel,
  onConfirm
}) {
  const type = itemType ?? itemName;
  const sel = selectedItem ?? (itemType ? itemName : '');
  return React.createElement(__ds_scope.Popup, {
    open,
    width: 'md',
    minHeight: 'auto',
    title: customTitle || 'Delete ' + type,
    onClose: onCancel,
    actions: React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8
      }
    }, React.createElement(__ds_scope.Button, {
      variant: 'secondary',
      onClick: onCancel,
      style: {
        minWidth: 100
      }
    }, 'Cancel'), React.createElement(__ds_scope.Button, {
      variant: 'primary',
      disabled: loading,
      onClick: onConfirm,
      style: {
        minWidth: 100
      }
    }, 'Confirm'))
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, React.createElement('div', {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'var(--error-100)',
      color: 'var(--error-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'trash-03'
  })), React.createElement('div', {
    style: {
      font: 'var(--text-input)',
      color: 'var(--gray-900)'
    }
  }, customMessage || React.createElement(React.Fragment, null, 'Are you sure you want to delete this ', React.createElement('strong', null, sel), ' ', type, '?'))));
}
Object.assign(__ds_scope, { ConfirmDeletePopup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/ConfirmDeletePopup.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Toast.jsx
try { (() => {
/* Mirrors TkNotification: 330px, 6px radius, px-4 py-3, gap-3, white, shadow-lg; 20px status icon; bold title + 16px close x (#A4A7AE);
   14px #535862 message; slideIn translateX(100%) → 0, 0.3s ease-out. */
const KIND = {
  success: {
    icon: 'approved-circle',
    c: '#079455'
  },
  error: {
    icon: 'rejected-circle',
    c: '#D92D20'
  },
  warning: {
    icon: 'alert-circle',
    c: '#F79009'
  },
  info: {
    icon: 'help-circle',
    c: '#1199D6'
  }
};
/** TkNotification toast. Auto-closes after `duration` ms (pauses on hover) when autoClose is true. */
function Toast({
  type = 'info',
  title = 'Notification',
  message,
  onClose,
  duration = 3000,
  autoClose = false,
  style
}) {
  const k = KIND[type];
  React.useEffect(() => {
    if (document.getElementById('clm-toast-kf')) return;
    const s = document.createElement('style');
    s.id = 'clm-toast-kf';
    s.textContent = '@keyframes clmToastIn{from{transform:translateX(100%)}to{transform:translateX(0)}}';
    document.head.appendChild(s);
  }, []);
  const timer = React.useRef(null);
  React.useEffect(() => {
    if (autoClose && duration > 0 && onClose) {
      timer.current = setTimeout(onClose, duration);
      return () => clearTimeout(timer.current);
    }
  }, []);
  return React.createElement('div', {
    onMouseEnter: () => clearTimeout(timer.current),
    style: {
      width: 330,
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      display: 'flex',
      gap: 12,
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)',
      animation: 'clmToastIn 0.3s ease-out',
      boxSizing: 'border-box',
      ...style
    }
  }, k && React.createElement('div', {
    style: {
      marginTop: 4,
      width: 20,
      height: 20
    }
  }, React.createElement(__ds_scope.Icon, {
    name: k.icon,
    color: k.c
  })), React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--text-toast-title)'
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--gray-900)'
    }
  }, title), React.createElement('div', {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x-close',
    size: 'sm',
    color: '#A4A7AE'
  }))), message && React.createElement('div', {
    style: {
      font: 'var(--text-body)',
      color: '#535862',
      overflowWrap: 'break-word'
    }
  }, message)));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Toast.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clm-admin/ClmAdminApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useMemo,
  useEffect
} = React;
const DS = window.CLMDesignSystem_e371e1 || {};
const {
  AppHeader,
  Sidebar,
  PageHeader,
  SearchFilterBar,
  Button,
  Table,
  Pagination,
  Tag,
  StatusTag,
  ColorMap,
  CustomStatsCard,
  ListCard,
  EmptyState,
  Popup,
  ConfirmDeletePopup,
  Toast,
  Input,
  FilterSelect,
  DateRangeInput,
  Toggle,
  UploadFile,
  Icon
} = DS;
const D = window.CLM_DATA || {};
const findColorMap = s => ColorMap ? ColorMap(s) : 'secondary';
const formatName = s => (s || '').toLowerCase().split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
const EXPIRED_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 6v6l4 2m6-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" stroke="#D92D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* ---------- Requests (DocumentRequests.vue) ---------- */
function PdfButton({
  tone,
  onClick
}) {
  const [h, setH] = useState(false);
  const c = tone === 'purple' ? {
    bg: 'var(--purple-50)',
    hb: 'var(--purple-100)',
    bd: 'var(--purple-200)',
    ic: '#7C3AED'
  } : {
    bg: 'var(--success-50)',
    hb: 'var(--success-100)',
    bd: 'var(--success-200)',
    ic: '#059669'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Download PDF",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick: e => {
      e.stopPropagation();
      onClick && onClick();
    },
    style: {
      minWidth: 50,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      padding: '6px 0 6px 4px',
      background: h ? c.hb : c.bg,
      border: '1px solid ' + c.bd,
      borderRadius: 9999,
      cursor: 'pointer',
      transition: 'background-color 0.15s'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download-cloud-02",
    color: c.ic
  }));
}
function DateCell({
  v
}) {
  if (!v) return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-900)'
    }
  }, "--");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      color: 'var(--gray-900)'
    }
  }, /*#__PURE__*/React.createElement("span", null, v[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--gray-500)'
    }
  }, v[1]));
}
function ActionsMenu({
  disabled,
  canRetrigger,
  onExpire,
  onRetrigger
}) {
  const [open, setOpen] = useState(false);
  const Item = ({
    icon,
    label,
    onClick,
    off
  }) => /*#__PURE__*/React.createElement("div", {
    role: "menuitem",
    onClick: () => {
      if (off) return;
      setOpen(false);
      onClick();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 10px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-button)',
      color: off ? 'var(--gray-400)' : 'var(--gray-700)',
      cursor: off ? 'not-allowed' : 'pointer'
    },
    onMouseEnter: e => !off && (e.currentTarget.style.background = 'var(--gray-100)'),
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: "sm"
  }), label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary-outline",
    disabled: disabled,
    onClick: () => setOpen(!open)
  }, "Actions"), open && !disabled && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 'calc(100% + 4px)',
      minWidth: 160,
      background: '#fff',
      border: '1px solid var(--gray-200)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 4,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Item, {
    icon: "file-x",
    label: "Expire",
    onClick: onExpire
  }), /*#__PURE__*/React.createElement(Item, {
    icon: "clock",
    label: "Retrigger",
    onClick: onRetrigger,
    off: !canRetrigger
  })));
}
function RequestsPage({
  notify
}) {
  const [rows, setRows] = useState(D.requests);
  const [account, setAccount] = useState(null);
  const [status, setStatus] = useState([]);
  const [signing, setSigning] = useState([]);
  const [doc, setDoc] = useState(null);
  const [dates, setDates] = useState(['Sep 16, 2026', 'Sep 23, 2026']);
  const [q, setQ] = useState('');
  const [sel, setSel] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(50);
  const [details, setDetails] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const filtered = useMemo(() => rows.filter(r => (!account || r.account_id === account) && (!status.length || status.includes(r.status.toLowerCase())) && (!signing.length || signing.includes(r.signing_status.toLowerCase())) && (!doc || r.document_name === doc) && (!q || (r.reference_number + r.ext_ref_no + r.document_name).toLowerCase().includes(q.toLowerCase()))), [rows, account, status, signing, doc, q]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / size));
  const pageRows = filtered.slice((page - 1) * size, page * size);
  useEffect(() => {
    setPage(1);
    setSel([]);
  }, [account, status, signing, doc, q, size]);
  useEffect(() => setSel([]), [page]);
  const selRows = sel.map(i => pageRows[i]).filter(Boolean);
  const canRetrigger = selRows.length > 0 && selRows.every(r => r.status === 'NOT_STARTED');
  const n = selRows.length,
    noun = n === 1 ? 'request' : 'requests';
  const runBulk = kind => {
    const ids = new Set(selRows.map(r => r.session_id));
    setRows(rs => rs.map(r => ids.has(r.session_id) ? kind === 'expire' ? {
      ...r,
      expired_at: ['Sep 23, 2026', '04:30 PM']
    } : {
      ...r,
      status: 'IN_PROGRESS'
    } : r));
    notify({
      type: 'success',
      title: 'Success',
      message: kind === 'expire' ? 'Expired successfully.' : 'Retriggered successfully.'
    });
    setConfirm(null);
    setSel([]);
  };
  const s = D.summary;
  const cards = [{
    title: 'Not Started',
    value: s.not_started,
    iconName: 'file-02',
    iconVariant: 'primary'
  }, {
    title: 'In Progress',
    value: s.in_progress,
    iconName: 'clock',
    iconVariant: 'warning'
  }, {
    title: 'Completed',
    value: s.completed,
    iconName: 'check-circle',
    iconVariant: 'success'
  }, {
    title: 'Sent',
    value: s.sent,
    iconName: 'file-check-02',
    iconVariant: 'success'
  }, {
    title: 'Failed',
    value: s.failed,
    iconName: 'file-x',
    iconVariant: 'danger'
  }];
  const columns = [{
    key: 'reference_number',
    label: 'Reference Number',
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, r.reference_number)
  }, {
    key: 'status',
    label: 'Status',
    render: r => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        minWidth: 92,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      label: formatName(r.status),
      variant: findColorMap(r.status)
    }), r.expired_at ? /*#__PURE__*/React.createElement("span", {
      title: 'Expired on ' + r.expired_at[0],
      style: {
        display: 'inline-flex',
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999,
        border: '1px solid var(--error-200)',
        background: 'var(--error-50)',
        boxShadow: 'var(--shadow-sm)'
      },
      dangerouslySetInnerHTML: {
        __html: EXPIRED_SVG
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24
      }
    }))
  }, {
    key: 'ext_ref_no',
    label: 'External Reference Number',
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, r.ext_ref_no)
  }, {
    key: 'document_name',
    label: 'Document Name',
    width: 200
  }, {
    key: 'signing_status',
    label: 'Signing Status',
    render: r => /*#__PURE__*/React.createElement(Tag, {
      label: formatName(r.signing_status),
      variant: findColorMap(r.signing_status)
    })
  }, {
    key: 'stamped_pdf',
    label: 'Stamped PDF',
    render: r => r.stamped_pdf ? /*#__PURE__*/React.createElement(PdfButton, {
      tone: "purple",
      onClick: () => notify({
        type: 'info',
        title: 'Download',
        message: 'Stamped PDF for ' + r.reference_number
      })
    }) : null
  }, {
    key: 'signed_pdf',
    label: 'Signed PDF',
    render: r => r.signed_pdf ? /*#__PURE__*/React.createElement(PdfButton, {
      tone: "green",
      onClick: () => notify({
        type: 'info',
        title: 'Download',
        message: 'Signed PDF for ' + r.reference_number
      })
    }) : null
  }, {
    key: 'started_at',
    label: 'Started At',
    width: 140,
    render: r => /*#__PURE__*/React.createElement(DateCell, {
      v: r.started_at
    })
  }, {
    key: 'finished_at',
    label: 'Finished At',
    width: 140,
    render: r => /*#__PURE__*/React.createElement(DateCell, {
      v: r.finished_at
    })
  }, {
    key: 'expired_at',
    label: 'Expired At',
    width: 140,
    render: r => /*#__PURE__*/React.createElement(DateCell, {
      v: r.expired_at
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Requests",
    count: filtered.length,
    showMargin: false
  }, /*#__PURE__*/React.createElement(FilterSelect, {
    label: "Account",
    multiple: false,
    filterable: true,
    options: D.accounts.map(a => ({
      value: a.id,
      label: a.name
    })),
    value: account,
    onApply: setAccount,
    onClear: () => setAccount(null)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "plus",
    onClick: () => notify({
      type: 'info',
      title: 'New Request',
      message: 'Request form not included in this mock.'
    })
  }, "New Request"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      overflowX: 'auto',
      paddingBottom: 8
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(CustomStatsCard, _extends({
    key: c.title
  }, c, {
    value: String(c.value),
    style: {
      width: 267.5,
      flexShrink: 0
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--gray-200)',
      borderRadius: 'var(--radius-sm)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(FilterSelect, {
    label: "Status",
    options: [{
      value: 'not_started',
      label: 'Not Started'
    }, {
      value: 'in_progress',
      label: 'In Progress'
    }, {
      value: 'sent',
      label: 'Sent'
    }, {
      value: 'completed',
      label: 'Completed'
    }, {
      value: 'failed',
      label: 'Failed'
    }],
    value: status,
    onApply: setStatus,
    onClear: () => setStatus([]),
    style: {
      maxWidth: 190
    }
  }), /*#__PURE__*/React.createElement(FilterSelect, {
    label: "Signing Status",
    options: [{
      value: 'non_signing',
      label: 'Non Signing'
    }, {
      value: 'pending_sign',
      label: 'Pending Sign'
    }, {
      value: 'signed',
      label: 'Signed'
    }, {
      value: 'partially_signed',
      label: 'Partially Signed'
    }],
    value: signing,
    onApply: setSigning,
    onClear: () => setSigning([]),
    style: {
      maxWidth: 190
    }
  }), /*#__PURE__*/React.createElement(FilterSelect, {
    label: "Document",
    multiple: false,
    filterable: true,
    options: D.templateGroups.filter(g => g.is_active).map(g => g.name).filter((v, i, a) => a.indexOf(v) === i).sort(),
    value: doc,
    onApply: setDoc,
    onClear: () => setDoc(null),
    style: {
      maxWidth: 190
    }
  }), /*#__PURE__*/React.createElement(DateRangeInput, {
    value: dates,
    onClear: () => setDates(null)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "md",
    placeholder: "Search...",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ActionsMenu, {
    disabled: !n,
    canRetrigger: canRetrigger,
    onExpire: () => setConfirm('expire'),
    onRetrigger: () => setConfirm('retrigger')
  }))), /*#__PURE__*/React.createElement(Table, {
    rows: pageRows,
    columns: columns,
    selectable: true,
    selected: sel,
    onSelectChange: setSel,
    emptyState: true,
    onRowClick: r => setDetails(r),
    style: {
      maxHeight: 'calc(100vh - 420px)',
      minHeight: 240
    }
  }), /*#__PURE__*/React.createElement(Pagination, {
    pagination: {
      page,
      page_size: size,
      total_items: filtered.length,
      total_pages: totalPages
    },
    onPageChange: setPage,
    onSizeChange: setSize
  })), details && /*#__PURE__*/React.createElement(Popup, {
    width: "lg",
    title: details.reference_number,
    onClose: () => setDetails(null)
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 16,
      background: 'var(--gray-50)',
      border: '1px solid var(--gray-200)',
      borderRadius: 'var(--radius-sm)',
      font: '400 13px/20px ui-monospace, Menlo, monospace',
      color: 'var(--gray-800)',
      whiteSpace: 'pre-wrap'
    }
  }, JSON.stringify({
    session_id: details.session_id,
    reference_number: details.reference_number,
    ext_ref_no: details.ext_ref_no,
    status: details.status,
    signing_status: details.signing_status,
    document_name: details.document_name
  }, null, 2))), confirm && /*#__PURE__*/React.createElement(Popup, {
    width: "md",
    minHeight: "auto",
    title: (confirm === 'expire' ? 'Expire' : 'Retrigger') + ' CLM Session ' + (n === 1 ? 'Request' : 'Requests'),
    onClose: () => setConfirm(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setConfirm(null),
      style: {
        minWidth: 100
      }
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => runBulk(confirm),
      style: {
        minWidth: 100
      }
    }, "Confirm"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gray-700)',
      font: 'var(--text-input)'
    }
  }, `You are about to ${confirm} ${n} selected CLM ${noun}. Click Confirm to continue or Cancel to abort this action.`)));
}

/* ---------- Fonts › Upload (UploadFont.vue) ---------- */
function UploadFontPopup({
  onClose,
  onUploaded,
  notify
}) {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [err, setErr] = useState({});
  const [loading, setLoading] = useState(false);
  const up = React.useRef(null);
  const check = (k, v) => !v.trim() ? 'This field is required' : k === 'url' && !/^https?:\/\/.+/i.test(v) ? 'Please enter a valid URL starting with http:// or https://' : null;
  const upload = () => {
    const e = {
      name: check('name', name),
      url: check('url', url)
    };
    const fileOk = up.current ? up.current.validate() : !!file;
    setErr(e);
    if (e.name || e.url || !fileOk) return;
    setLoading(true);
    setTimeout(() => {
      notify({
        type: 'success',
        title: 'Success',
        message: 'Font uploaded successfully'
      });
      onUploaded({
        display_name: name.trim(),
        css_family: name.trim(),
        google_font_url: url.trim(),
        is_active: true
      });
    }, 900);
  };
  return /*#__PURE__*/React.createElement(Popup, {
    width: "600px",
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 18px/28px var(--font-sans)'
      }
    }, "Upload Font"),
    onClose: onClose,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      disabled: loading,
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      loading: loading,
      onClick: upload
    }, "Upload"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: 'var(--text-form-label)',
      color: 'var(--gray-700)',
      marginBottom: 8
    }
  }, "Upload TTF File"), /*#__PURE__*/React.createElement(UploadFile, {
    ref: up,
    required: true,
    errorMessage: "File is required",
    onChange: setFile,
    onReject: (title, message) => notify({
      type: 'error',
      title,
      message
    })
  })), /*#__PURE__*/React.createElement(Input, {
    prefix: "Font Name",
    prefixWidth: 148,
    placeholder: "Enter font name",
    required: true,
    value: name,
    onChange: e => {
      setName(e.target.value);
      setErr({
        ...err,
        name: check('name', e.target.value)
      });
    },
    hasErrors: !!err.name,
    messages: err.name ? [err.name] : []
  }), /*#__PURE__*/React.createElement(Input, {
    prefix: "Google Font URL",
    prefixWidth: 148,
    placeholder: "Enter Google Font URL",
    required: true,
    value: url,
    onChange: e => {
      setUrl(e.target.value);
      setErr({
        ...err,
        url: check('url', e.target.value)
      });
    },
    hasErrors: !!err.url,
    messages: err.url ? [err.url] : []
  })));
}

/* ---------- List pages (TemplateGroups / Tags / TemplateRules / TemplateGroupTypes / Accounts / Fonts .vue) ---------- */
const PAGES = {
  'Template Groups': {
    key: 'templateGroups',
    noun: 'Template Group',
    ph: 'Search Template Groups by Name',
    status: true,
    del: true,
    badge: true,
    title: r => r.name,
    search: r => r.name,
    fields: [['name', 'Name', true], ['code', 'Code', true]]
  },
  'Tags': {
    key: 'tags',
    noun: 'Tag',
    ph: 'Search Tags by Code',
    status: true,
    del: true,
    badge: true,
    title: r => r.code,
    search: r => r.code,
    fields: [['code', 'Code', true]]
  },
  'Template Rules': {
    key: 'templateRules',
    noun: 'Template Rule',
    ph: 'Search Template Rules by Name',
    status: false,
    del: true,
    badge: false,
    noActive: true,
    title: r => formatName(r.entity_name),
    search: r => r.entity_name,
    fields: [['entity_name', 'Entity Name', true]]
  },
  'Template Group Types': {
    key: 'templateGroupTypes',
    noun: 'Template Group Type',
    ph: 'Search Template Group Type by Name or Code',
    status: false,
    del: false,
    badge: false,
    noActive: true,
    defaults: true,
    search: r => r.name + ' ' + r.code,
    fields: [['name', 'Name', true], ['code', 'Code', true]]
  },
  'Accounts': {
    key: 'accounts',
    noun: 'Account',
    ph: 'Search Accounts by Name or Code',
    status: true,
    del: false,
    badge: true,
    defaults: true,
    search: r => r.name + ' ' + r.code,
    fields: [['name', 'Name', true], ['code', 'Code', true]]
  },
  'Fonts': {
    key: 'fonts',
    noun: 'Font',
    ph: 'Search Fonts by Name or CSS Family',
    status: true,
    del: true,
    badge: true,
    upload: true,
    title: r => r.display_name,
    search: r => r.display_name + ' ' + r.css_family,
    fields: [['display_name', 'Display Name', true], ['css_family', 'CSS Family', true]]
  }
};
function AddEditPopup({
  cfg,
  item,
  onClose,
  onSave
}) {
  const [form, setForm] = useState(item ? {
    ...item
  } : {
    is_active: true
  });
  const [errors, setErrors] = useState({});
  const title = item ? cfg.title ? cfg.title(item) : item.name : 'Create ' + cfg.noun;
  const save = () => {
    const e = {};
    cfg.fields.forEach(([k, l, req]) => {
      if (req && !String(form[k] || '').trim()) e[k] = l + ' is required';
    });
    setErrors(e);
    if (!Object.keys(e).length) onSave(form);
  };
  return /*#__PURE__*/React.createElement(Popup, {
    width: "lg",
    title: title,
    onClose: onClose,
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: save
    }, "Save")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, cfg.fields.map(([k, l, req]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '500 15px/20px var(--font-sans)',
      color: '#414651'
    }
  }, l, req && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--error-700)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: l,
    value: form[k] || '',
    disabled: !!item && k === 'code' && cfg.key === 'tags',
    onChange: e => setForm({
      ...form,
      [k]: e.target.value.replace(/^\s+/, '')
    }),
    hasErrors: !!errors[k],
    messages: errors[k] ? [errors[k]] : []
  })))), !cfg.noActive && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      borderTop: '1px solid #ededed',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '500 15px/20px var(--font-sans)',
      color: '#414651'
    }
  }, "Active"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: !!form.is_active,
    onChange: v => setForm({
      ...form,
      is_active: v
    })
  })))));
}
function ListPage({
  screen,
  notify
}) {
  const cfg = PAGES[screen];
  const [rows, setRows] = useState(D[cfg.key]);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState(['active']);
  const [edit, setEdit] = useState(null);
  const [del, setDel] = useState(null);
  const [upload, setUpload] = useState(false);
  const [detail, setDetail] = useState(null);
  const isTG = cfg.key === 'templateGroups';
  const openEdit = item => isTG ? setDetail({
    item
  }) : setEdit({
    item
  });
  if (isTG && detail && window.TemplateGroupDetail) {
    const TGD = window.TemplateGroupDetail;
    return /*#__PURE__*/React.createElement(TGD, {
      group: detail.item,
      types: D.templateGroupTypes,
      notify: notify,
      onBack: () => setDetail(null),
      onSaved: g => {
        setRows(rs => rs.some(x => x.id === g.id) ? rs.map(x => x.id === g.id ? g : x) : [g, ...rs]);
        setDetail(null);
      }
    });
  }
  const filtered = rows.filter(r => (!cfg.status || !status.length || status.length === 2 || status[0] === 'active' === !!r.is_active) && (!q || cfg.search(r).toLowerCase().includes(q.toLowerCase()))).sort((a, b) => cfg.search(a).localeCompare(cfg.search(b), undefined, {
    sensitivity: 'base'
  }));
  const active = !!q || cfg.status && status.length === 1;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: screen,
    count: filtered.length
  }), /*#__PURE__*/React.createElement(SearchFilterBar, {
    search: q,
    onSearchChange: e => setQ(e.target.value),
    placeholder: cfg.ph,
    showStatusFilter: cfg.status,
    status: status,
    onStatusChange: setStatus,
    onCreate: () => openEdit(null)
  }, cfg.upload && /*#__PURE__*/React.createElement(Button, {
    variant: "primary-outline",
    style: {
      height: 42
    },
    onClick: () => setUpload(true)
  }, "Upload")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      overflow: 'auto',
      height: 'calc(100vh - 240px)'
    }
  }, filtered.length ? filtered.map(r => /*#__PURE__*/React.createElement(ListCard, {
    key: r.id,
    item: r,
    title: cfg.title && cfg.title(r),
    showDefaultFields: !!cfg.defaults,
    showActiveBadge: cfg.badge,
    onDelete: cfg.del ? () => setDel(r) : undefined,
    onClick: () => openEdit(r),
    style: {
      flexShrink: 0
    }
  })) : /*#__PURE__*/React.createElement(EmptyState, {
    isFilterOrSearchActive: active
  })), edit && cfg.key === 'templateRules' && window.TemplateRuleDetail && (() => {
    const TRD = window.TemplateRuleDetail;
    const used = rows.map(r => r.entity_name);
    const types = D.templateGroupTypes.filter(t => edit.item && edit.item.entity_name === t.name || !used.includes(t.name)).sort((a, b) => a.name.localeCompare(b.name));
    const item = edit.item || {
      entity_name: types[0] ? types[0].name : '',
      content: ''
    };
    return /*#__PURE__*/React.createElement(TRD, {
      item: item,
      types: types,
      notify: notify,
      onClose: () => setEdit(null),
      onSaved: f => {
        setRows(rs => rs.some(x => x.id === f.id) ? rs.map(x => x.id === f.id ? f : x) : [f, ...rs]);
        notify({
          type: 'success',
          title: 'Success',
          message: edit.item ? 'Updated successfully' : 'Created successfully'
        });
        setEdit(null);
      }
    });
  })(), edit && cfg.key !== 'templateRules' && /*#__PURE__*/React.createElement(AddEditPopup, {
    cfg: cfg,
    item: edit.item,
    onClose: () => setEdit(null),
    onSave: f => {
      setRows(rs => edit.item ? rs.map(x => x.id === f.id ? f : x) : [{
        ...f,
        id: cfg.key + '_' + Date.now()
      }, ...rs]);
      notify({
        type: 'success',
        title: 'Success',
        message: edit.item ? 'Updated successfully' : 'Created successfully'
      });
      setEdit(null);
    }
  }), upload && /*#__PURE__*/React.createElement(UploadFontPopup, {
    notify: notify,
    onClose: () => setUpload(false),
    onUploaded: f => {
      setRows(rs => [{
        ...f,
        id: 'f_' + Date.now()
      }, ...rs]);
      setUpload(false);
    }
  }), del && /*#__PURE__*/React.createElement(ConfirmDeletePopup, {
    itemType: cfg.noun,
    selectedItem: cfg.title ? cfg.title(del) : del.name,
    onCancel: () => setDel(null),
    onConfirm: () => {
      setRows(rs => rs.filter(x => x.id !== del.id));
      notify({
        type: 'success',
        title: 'Success',
        message: 'Deleted successfully'
      });
      setDel(null);
    }
  }));
}

/* ---------- Shell (Home.vue + DocumentManagement.vue) ---------- */
function App() {
  const [screen, setScreen] = useState(() => localStorage.getItem('clm-admin-screen') || 'Requests');
  const [toasts, setToasts] = useState([]);
  const go = s => {
    setScreen(s);
    localStorage.setItem('clm-admin-screen', s);
  };
  const notify = t => setToasts(ts => [...ts, {
    ...t,
    id: Date.now() + Math.random()
  }]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      background: '#fff',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(AppHeader, {
    user: "Afnas K P"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      width: '100%',
      padding: 16,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'calc(100vh - 87px)',
      minHeight: 560,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--gray-200)',
      display: 'flex',
      overflow: 'hidden',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '20%',
      minWidth: 200,
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid var(--gray-200)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: screen,
    onSelect: go,
    style: {
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '80%',
      minWidth: 0,
      padding: '28px 32px',
      overflow: 'auto',
      boxSizing: 'border-box'
    },
    "data-screen-label": screen
  }, screen === 'Requests' ? /*#__PURE__*/React.createElement(RequestsPage, {
    notify: notify
  }) : /*#__PURE__*/React.createElement(ListPage, {
    key: screen,
    screen: screen,
    notify: notify
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 16,
      right: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      zIndex: 200
    }
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, _extends({
    key: t.id
  }, t, {
    autoClose: true,
    duration: 3000,
    onClose: () => setToasts(ts => ts.filter(x => x.id !== t.id))
  })))));
}
window.CLMAdminApp = App;
if (document.querySelector('script[src$="ClmAdminApp.jsx"]')) ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clm-admin/ClmAdminApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clm-admin/TemplateGroupDetail.jsx
try { (() => {
// Template Group details page — AddEditTemplateGroups.vue + TemplatesComponent.vue (+ Reorder / Add-Remove Tags / Delete / Rules popups).
(function () {
  const {
    useState,
    useRef
  } = React;
  const DS = window.CLMDesignSystem_e371e1 || {};
  const {
    Button,
    Input,
    Select,
    Toggle,
    Checkbox,
    Tag,
    Icon,
    Popup,
    ConfirmDeletePopup
  } = DS;
  const LOGS_ICON = 'logsIcon.png';
  const label = {
    font: '500 15px/20px var(--font-sans)',
    color: '#414651'
  };
  const card = {
    border: '1px solid rgba(234,238,242,0.8)',
    borderRadius: 4,
    padding: 15
  };
  const rowLine = '1px solid rgba(234,238,242,0.8)';
  const GRID = {
    display: 'grid',
    gridTemplateColumns: '0.8fr 0.8fr 0.8fr 0.5fr 0.65fr',
    gap: 32,
    alignItems: 'center',
    font: 'var(--text-body)',
    color: 'var(--gray-900)',
    borderBottom: rowLine
  };
  const fileName = url => (url || '').split('/').pop();
  function IconBox({
    children,
    onClick,
    title,
    disabled
  }) {
    const [h, setH] = useState(false);
    return /*#__PURE__*/React.createElement("div", {
      role: "button",
      title: title,
      onClick: disabled ? undefined : onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #e7e7e7',
        padding: 7,
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        flexShrink: 0,
        background: h && !disabled ? 'var(--gray-50)' : 'transparent'
      }
    }, children);
  }
  function TagsCell({
    tags
  }) {
    const [open, setOpen] = useState(false);
    if (!tags || !tags.length) return /*#__PURE__*/React.createElement("div", null);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        minWidth: 0
      },
      onMouseEnter: () => setOpen(true),
      onMouseLeave: () => setOpen(false)
    }, /*#__PURE__*/React.createElement(Tag, {
      label: tags[0].code,
      variant: "secondary",
      style: {
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }), tags.length > 1 && /*#__PURE__*/React.createElement(Tag, {
      label: '+' + (tags.length - 1),
      variant: "secondary",
      style: {
        marginLeft: 8,
        flexShrink: 0
      }
    }), open && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: 0,
        zIndex: 50,
        background: '#fff',
        boxShadow: 'var(--shadow-lg)',
        borderRadius: 4,
        border: '1px solid var(--gray-200)',
        padding: 8,
        minWidth: 150,
        maxWidth: 225
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 14px/20px var(--font-sans)',
        color: 'var(--gray-700)',
        marginBottom: 4
      }
    }, "All Tags:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, [...tags].sort((a, b) => a.code.localeCompare(b.code)).map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t.code,
      label: t.code,
      variant: "secondary"
    })))));
  }
  function UploadCell({
    onUploaded
  }) {
    const [p, setP] = useState(0);
    const inp = useRef(null);
    const pick = f => {
      if (!f) return;
      let v = 0;
      const iv = setInterval(() => {
        v = Math.min(100, v + 25);
        setP(v);
        if (v >= 100) {
          clearInterval(iv);
          setTimeout(() => {
            setP(0);
            onUploaded('https://files.example/' + f.name);
          }, 300);
        }
      }, 250);
    };
    if (p) return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 250,
        maxWidth: '100%',
        height: 20,
        borderRadius: 9999,
        background: 'var(--gray-200)',
        overflow: 'hidden',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: p + '%',
        height: '100%',
        background: '#1199D6',
        transition: 'width 0.25s'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '600 12px/16px var(--font-sans)',
        color: p > 15 ? '#fff' : 'var(--gray-700)'
      }
    }, p, "%")));
    return /*#__PURE__*/React.createElement("div", {
      role: "button",
      onClick: () => inp.current.click(),
      style: {
        width: '100%',
        height: 40,
        padding: '10px 12px',
        boxSizing: 'border-box',
        borderRadius: 'var(--radius-sm)',
        border: '1px dashed var(--gray-200)',
        background: '#ebf5ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload-cloud-01",
      color: "#239bd1"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-button)',
        color: '#239bd1'
      }
    }, "Upload"), /*#__PURE__*/React.createElement("input", {
      ref: inp,
      type: "file",
      accept: ".docx",
      style: {
        display: 'none'
      },
      onChange: e => {
        pick(e.target.files[0]);
        e.target.value = '';
      }
    }));
  }
  function ActionsDropdown({
    options
  }) {
    const [open, setOpen] = useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary-outline",
      onClick: () => setOpen(!open)
    }, "Actions"), open && /*#__PURE__*/React.createElement("div", {
      onMouseLeave: () => setOpen(false),
      style: {
        position: 'absolute',
        right: 0,
        top: 'calc(100% + 4px)',
        minWidth: 180,
        background: '#fff',
        border: '1px solid var(--gray-200)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        padding: 4,
        zIndex: 50
      }
    }, options.map(o => /*#__PURE__*/React.createElement("div", {
      key: o.label,
      role: "menuitem",
      onClick: () => {
        if (o.disabled) return;
        setOpen(false);
        o.action();
      },
      onMouseEnter: e => !o.disabled && (e.currentTarget.style.background = 'var(--gray-100)'),
      onMouseLeave: e => e.currentTarget.style.background = 'transparent',
      style: {
        padding: '8px 10px',
        borderRadius: 'var(--radius-sm)',
        font: 'var(--text-button)',
        color: o.disabled ? 'var(--gray-400)' : 'var(--gray-700)',
        cursor: o.disabled ? 'not-allowed' : 'pointer'
      }
    }, o.label))));
  }
  function ReorderPopup({
    templates,
    onClose,
    onApply
  }) {
    const [list, setList] = useState(templates);
    const [hover, setHover] = useState(-1);
    const drag = useRef(null);
    return /*#__PURE__*/React.createElement(Popup, {
      width: "60vw",
      minHeight: "auto",
      title: "Reorder Templates",
      onClose: onClose,
      actions: /*#__PURE__*/React.createElement(Button, {
        style: {
          minWidth: 100,
          padding: 8
        },
        onClick: () => onApply(list)
      }, "Apply")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15
      }
    }, list.map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      draggable: true,
      onDragStart: () => drag.current = i,
      onDragOver: e => e.preventDefault(),
      onDrop: () => {
        const a = [...list];
        const [m] = a.splice(drag.current, 1);
        a.splice(i, 0, m);
        setList(a);
      },
      onMouseOver: () => setHover(i),
      onMouseLeave: () => setHover(-1),
      style: {
        display: 'flex',
        gap: 10,
        padding: 15,
        alignItems: 'center',
        background: hover === i ? '#f9f9f9' : 'transparent',
        cursor: 'grab'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/20px var(--font-sans)',
        letterSpacing: '-0.07px',
        color: '#8b9fbd',
        width: 18
      }
    }, hover === i ? /*#__PURE__*/React.createElement(Icon, {
      name: "three-lines",
      size: 14,
      color: "#8b9fbd"
    }) : i + 1 + '.'), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '700 14px/20px var(--font-sans)',
        letterSpacing: '-0.07px',
        color: 'var(--gray-900)'
      }
    }, t.name)))));
  }
  function TagsPopup({
    mode,
    onClose,
    onSave
  }) {
    const [sel, setSel] = useState([]);
    const tags = (window.CLM_DATA.tags || []).map(t => t.code).sort();
    return /*#__PURE__*/React.createElement(Popup, {
      width: "45rem",
      title: /*#__PURE__*/React.createElement("span", {
        style: {
          textTransform: 'capitalize'
        }
      }, mode, " Tags for Templates"),
      onClose: onClose,
      actions: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 12,
          padding: 4
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: onClose
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => onSave(sel)
      }, "Save"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        minHeight: '15vh'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: label
    }, "Select Tags to ", mode), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select Tags",
      options: tags,
      value: sel,
      onChange: setSel,
      multiple: true,
      checkbox: true,
      showBadge: true,
      filterable: true
    })));
  }
  function RulesPopup({
    template,
    onClose,
    onSave
  }) {
    const [txt, setTxt] = useState(template.rule_expression ? JSON.stringify(JSON.parse(template.rule_expression), null, 2) : '');
    return /*#__PURE__*/React.createElement(Popup, {
      width: "lg",
      title: 'Rules — ' + template.name,
      onClose: onClose,
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: onClose
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => onSave(txt.trim() ? JSON.stringify(JSON.parse(txt)) : null)
      }, "Save"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--text-body)',
        color: 'var(--gray-600)'
      }
    }, "Advanced Rule Builder is not reproduced in this mock. Edit the rule expression directly."), /*#__PURE__*/React.createElement("textarea", {
      value: txt,
      onChange: e => setTxt(e.target.value),
      rows: 10,
      placeholder: "{\"all\":[{\"field\":\"lease.type\",\"op\":\"eq\",\"value\":\"NEW\"}]}",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        padding: 12,
        border: '1px solid var(--gray-300)',
        borderRadius: 'var(--radius-sm)',
        font: '400 13px/20px ui-monospace, Menlo, monospace',
        color: 'var(--gray-900)',
        resize: 'vertical'
      }
    })));
  }
  function AuditPopup({
    title,
    onClose
  }) {
    const rows = [['Sep 23, 2026 04:02 PM', 'Afnas K P', 'Updated', 'is_active: false → true'], ['Sep 21, 2026 11:15 AM', 'Sajil Jose', 'Updated', 'name changed'], ['Sep 12, 2026 09:40 AM', 'Afnas K P', 'Created', '—']];
    return /*#__PURE__*/React.createElement(Popup, {
      width: "lg",
      title: 'Audit Logs — ' + title,
      onClose: onClose
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '180px 140px 100px 1fr',
        gap: 16,
        padding: '12px 0',
        borderBottom: rowLine,
        font: 'var(--text-body)',
        color: 'var(--gray-900)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gray-600)'
      }
    }, r[0]), /*#__PURE__*/React.createElement("span", null, r[1]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Tag, {
      label: r[2],
      variant: r[2] === 'Created' ? 'success' : 'blue'
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'ui-monospace, Menlo, monospace',
        fontSize: 13
      }
    }, r[3])))));
  }
  function TemplateGroupDetail({
    group,
    types,
    onBack,
    onSaved,
    notify
  }) {
    const [form, setForm] = useState(() => group ? {
      ...group
    } : {
      name: '',
      description: '',
      template_group_type_id: null,
      is_active: true
    });
    const [errs, setErrs] = useState({});
    const [templates, setTemplates] = useState(() => (group && group.templates || []).map(t => ({
      ...t,
      isConfirmed: true,
      isEditable: false
    })).sort((a, b) => a.sort_order - b.sort_order));
    const [tErr, setTErr] = useState({});
    const [sel, setSel] = useState([]);
    const [popup, setPopup] = useState(null);
    const req = v => !v || !String(v).trim() ? 'Field is required.' : String(v).length > 255 ? 'Must not exceed 255 characters' : null;
    const validate = () => {
      const e = {
        name: req(form.name),
        type: form.template_group_type_id ? null : 'Field is required.'
      };
      setErrs(e);
      return !e.name && !e.type;
    };
    const save = () => {
      if (!validate()) return;
      notify({
        type: 'success',
        title: 'Success',
        message: form.id ? 'Updated Successfully!' : 'Created Successfully!'
      });
      onSaved({
        ...form,
        id: form.id || 'tg_' + Date.now(),
        templates: templates.filter(t => t.isConfirmed).map(({
          isConfirmed,
          isEditable,
          ...t
        }) => t)
      });
    };
    const ensureGroup = () => {
      if (form.id) return true;
      if (!validate()) {
        notify({
          type: 'error',
          title: 'Validation Error',
          message: 'Please fill in all required fields before saving a template.'
        });
        return false;
      }
      setForm(f => ({
        ...f,
        id: 'tg_' + Date.now()
      }));
      notify({
        type: 'success',
        title: 'Success',
        message: 'Template group created successfully'
      });
      return true;
    };
    const upd = (i, patch) => setTemplates(ts => ts.map((t, j) => j === i ? {
      ...t,
      ...patch
    } : t));
    const saveTpl = i => {
      const t = templates[i];
      if (!t.name || !t.name.trim()) {
        setTErr({
          ...tErr,
          [i]: 'Field is required'
        });
        return;
      }
      if (!ensureGroup()) return;
      upd(i, {
        isEditable: false,
        isConfirmed: true,
        id: t.id || 'tpl_' + Date.now()
      });
      notify({
        type: 'success',
        title: 'Success',
        message: t.id ? 'Template updated successfully' : 'Template created successfully'
      });
    };
    const addTemplate = () => {
      if (templates.some(t => !t.isConfirmed)) {
        notify({
          type: 'warning',
          title: 'Action Denied',
          message: 'Please save existing templates before creating a new one.'
        });
        return;
      }
      setTemplates(ts => [...ts, {
        name: '',
        rule_expression: null,
        sort_order: ts.reduce((m, t) => Math.max(m, t.sort_order || 0), 0) + 1,
        file_url: '',
        tags: [],
        isConfirmed: false,
        isEditable: true
      }]);
    };
    const ids = templates.map(t => t.id).filter(Boolean);
    const allSel = templates.length > 0 && sel.length === templates.length;
    const typeName = (types.find(t => t.id === form.template_group_type_id) || {}).name;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      role: "button",
      onClick: onBack,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      color: "var(--gray-900)"
    }), /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: 0,
        font: '400 16px/24px var(--font-sans)',
        color: 'var(--gray-900)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, group ? group.name : 'Create Template Group')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, form.id && /*#__PURE__*/React.createElement("div", {
      role: "button",
      title: "Audit Logs",
      onClick: () => setPopup({
        kind: 'audit',
        title: form.name
      }),
      style: {
        display: 'flex',
        alignItems: 'center',
        width: 40,
        height: 35,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("img", {
      alt: "Audit logs",
      src: LOGS_ICON,
      style: {
        maxWidth: '100%'
      }
    })), /*#__PURE__*/React.createElement(Button, {
      onClick: save,
      style: {
        minWidth: 118
      }
    }, "Save"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20,
        ...card,
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...label,
        flex: 1
      }
    }, "Name ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--error-700)'
      }
    }, "*")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 2,
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Name",
      value: form.name,
      onChange: e => {
        const v = e.target.value.replace(/^\s+/, '');
        setForm({
          ...form,
          name: v
        });
        setErrs({
          ...errs,
          name: req(v)
        });
      },
      hasErrors: !!errs.name,
      messages: errs.name ? [errs.name] : []
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...label,
        flex: 1
      }
    }, "Description"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 2,
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Description",
      value: form.description || '',
      onChange: e => setForm({
        ...form,
        description: e.target.value.replace(/^\s+/, '')
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...label,
        flex: 1
      }
    }, "Template Type ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--error-700)'
      }
    }, "*")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 2,
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select Type",
      options: types.map(t => ({
        value: t.id,
        label: t.name
      })),
      value: form.template_group_type_id,
      onChange: v => {
        setForm({
          ...form,
          template_group_type_id: v
        });
        setErrs({
          ...errs,
          type: null
        });
      },
      hasErrors: !!errs.type,
      messages: errs.type ? [errs.type] : []
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: label
    }, "Active"), /*#__PURE__*/React.createElement(Toggle, {
      checked: !!form.is_active,
      onChange: v => setForm({
        ...form,
        is_active: v
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20,
        ...card,
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        width: '100%',
        borderBottom: rowLine,
        padding: '8px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        flex: 1,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '700 20px/28px var(--font-sans)',
        color: 'var(--gray-900)'
      }
    }, "Templates"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 16px/24px var(--font-sans)',
        color: 'var(--gray-500)'
      }
    }, "Manage the templates that will be included in documents generated from this template group. You can edit and configure rules for each template.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12
      }
    }, templates.length > 0 && /*#__PURE__*/React.createElement(ActionsDropdown, {
      options: [{
        label: 'Reorder Templates',
        action: () => setPopup({
          kind: 'reorder'
        })
      }, {
        label: 'Add Tag',
        disabled: !sel.length,
        action: () => setPopup({
          kind: 'tags',
          mode: 'add'
        })
      }, {
        label: 'Remove Tag',
        disabled: !sel.length,
        action: () => setPopup({
          kind: 'tags',
          mode: 'remove'
        })
      }]
    }), /*#__PURE__*/React.createElement(Button, {
      iconLeft: "plus",
      disabled: templates.some(t => !t.isConfirmed),
      onClick: addTemplate
    }, "Add New Template"))), templates.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...GRID,
        padding: '16px 0',
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: allSel,
      onChange: c => setSel(c ? ids : [])
    }), "Template Name"), /*#__PURE__*/React.createElement("div", null, "File"), /*#__PURE__*/React.createElement("div", null, "Rules"), /*#__PURE__*/React.createElement("div", null, "Tags"), /*#__PURE__*/React.createElement("div", null, "Actions")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        maxHeight: 'calc(100vh - 22rem)'
      }
    }, templates.map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: t.id || 'new' + i,
      style: {
        background: i % 2 === 0 ? '#fafafa' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...GRID,
        padding: '12px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: 12,
        alignItems: 'center',
        paddingLeft: 12,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: sel.includes(t.id),
      disabled: !t.id,
      onChange: c => setSel(c ? [...sel, t.id] : sel.filter(x => x !== t.id))
    }), t.isConfirmed && !t.isEditable ? /*#__PURE__*/React.createElement("span", {
      title: t.name,
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, t.name || '--') : /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Input, {
      size: "md",
      placeholder: "Name",
      value: t.name,
      onChange: e => {
        upd(i, {
          name: e.target.value.replace(/^\s+/, '')
        });
        setTErr({
          ...tErr,
          [i]: e.target.value.trim() ? null : 'Field is required'
        });
      },
      hasErrors: !!tErr[i],
      messages: tErr[i] ? [tErr[i]] : []
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        minWidth: 200
      }
    }, t.isConfirmed && !t.isEditable && t.file_url ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      title: fileName(t.file_url),
      onClick: () => notify({
        type: 'info',
        title: 'Download',
        message: fileName(t.file_url)
      }),
      style: {
        width: '100%',
        minHeight: 40,
        color: '#239bd1',
        background: '#ebf5ff',
        border: '1px dashed #dcdfe6',
        borderRadius: 'var(--radius-md)',
        font: '600 16px/24px var(--font-sans)',
        cursor: 'pointer'
      }
    }, "View File") : /*#__PURE__*/React.createElement(UploadCell, {
      onUploaded: url => {
        if (!t.name || !t.name.trim()) {
          setTErr({
            ...tErr,
            [i]: 'Field is required'
          });
          return;
        }
        if (!ensureGroup()) return;
        upd(i, {
          file_url: url,
          isEditable: false,
          isConfirmed: true,
          id: t.id || 'tpl_' + Date.now()
        });
        notify({
          type: 'success',
          title: 'Success',
          message: 'File uploaded successfully'
        });
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary-outline",
      fullWidth: true,
      onClick: () => {
        if (!t.name || !t.name.trim()) {
          setTErr({
            ...tErr,
            [i]: 'Field is required'
          });
          return;
        }
        setPopup({
          kind: 'rules',
          index: i
        });
      }
    }, t.rule_expression ? 'View Rules' : 'Set Rules'), t.rule_expression && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -4,
        right: -4,
        width: 12,
        height: 12,
        background: '#67bc67',
        border: '2px solid #fff',
        borderRadius: 9999,
        boxSizing: 'border-box'
      }
    }))), /*#__PURE__*/React.createElement(TagsCell, {
      tags: t.tags
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        justifyContent: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(IconBox, {
      title: t.isEditable ? 'Save' : 'Edit',
      onClick: () => t.isEditable ? saveTpl(i) : setTemplates(ts => ts.map((x, j) => j === i ? {
        ...x,
        isEditable: true,
        isConfirmed: false
      } : {
        ...x,
        isEditable: false,
        isConfirmed: x.isConfirmed || !!x.id
      }))
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.isEditable ? 'save-icon' : 'edit-02',
      color: "#535862"
    })), /*#__PURE__*/React.createElement(IconBox, {
      title: "Delete",
      onClick: () => setPopup({
        kind: 'delete',
        index: i
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash-03",
      color: "var(--error-600)"
    })), t.id && /*#__PURE__*/React.createElement(IconBox, {
      title: "Audit Logs",
      onClick: () => setPopup({
        kind: 'audit',
        title: t.name
      })
    }, /*#__PURE__*/React.createElement("img", {
      alt: "Audit logs",
      src: LOGS_ICON,
      style: {
        width: 22,
        height: 20
      }
    })))))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 20,
        font: 'var(--text-body)',
        color: 'var(--gray-600)'
      }
    }, "There are no templates added to this template group.")), popup && popup.kind === 'reorder' && /*#__PURE__*/React.createElement(ReorderPopup, {
      templates: templates.filter(t => t.id),
      onClose: () => setPopup(null),
      onApply: list => {
        setTemplates(list.map((t, i) => ({
          ...t,
          sort_order: i + 1
        })));
        setPopup(null);
        notify({
          type: 'success',
          title: 'Success',
          message: 'Templates reordered successfully'
        });
      }
    }), popup && popup.kind === 'tags' && /*#__PURE__*/React.createElement(TagsPopup, {
      mode: popup.mode,
      onClose: () => setPopup(null),
      onSave: codes => {
        setTemplates(ts => ts.map(t => !sel.includes(t.id) ? t : {
          ...t,
          tags: popup.mode === 'add' ? [...(t.tags || []), ...codes.filter(c => !(t.tags || []).some(x => x.code === c)).map(code => ({
            code
          }))] : (t.tags || []).filter(x => !codes.includes(x.code))
        }));
        setPopup(null);
        setSel([]);
        notify({
          type: 'success',
          title: 'Success',
          message: popup.mode === 'add' ? 'Tags added successfully' : 'Tags removed successfully'
        });
      }
    }), popup && popup.kind === 'rules' && /*#__PURE__*/React.createElement(RulesPopup, {
      template: templates[popup.index],
      onClose: () => setPopup(null),
      onSave: expr => {
        const i = popup.index;
        upd(i, {
          rule_expression: expr
        });
        setPopup(null);
        if (templates[i].id) notify({
          type: 'success',
          title: 'Success',
          message: 'Template updated successfully'
        });
      }
    }), popup && popup.kind === 'delete' && /*#__PURE__*/React.createElement(ConfirmDeletePopup, {
      itemType: "Template",
      selectedItem: templates[popup.index].name,
      onCancel: () => setPopup(null),
      onConfirm: () => {
        const i = popup.index;
        setTemplates(ts => ts.filter((_, j) => j !== i));
        setPopup(null);
        notify({
          type: 'success',
          title: 'Success',
          message: 'Deleted successfully'
        });
      }
    }), popup && popup.kind === 'audit' && /*#__PURE__*/React.createElement(AuditPopup, {
      title: popup.title,
      onClose: () => setPopup(null)
    }));
  }
  window.TemplateGroupDetail = TemplateGroupDetail;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clm-admin/TemplateGroupDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clm-admin/TemplateRuleDetail.jsx
try { (() => {
// Template Rule details — AddEditTemplateRule.vue + FieldEditor.vue (Visual Editor / JSON Code tabs).
(function () {
  const {
    useState,
    useRef
  } = React;
  const {
    Popup,
    CloseButton,
    Button,
    Input,
    Select,
    Icon
  } = window.CLMDesignSystem_e371e1 || {};
  const uid = () => Math.random().toString(36).slice(2, 10);
  const FIELD_TYPES = [['Text', 'TEXT'], ['Amount', 'AMOUNT'], ['Numeric', 'NUMERIC'], ['Date', 'DATE'], ['Bool', 'BOOL'], ['Phone', 'PHONE'], ['State List', 'STATE_LIST'], ['Select', 'SELECT'], ['Array', 'ARRAY'], ['Object', 'OBJECT']].map(([label, value]) => ({
    label,
    value
  }));
  const NESTED_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><g stroke="#606060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><line x1="4" y1="5" x2="4" y2="19"/><line x1="20" y1="5" x2="20" y2="19"/><path d="M4 8C4 9.66 7.58 11 12 11s8-1.34 8-3"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/><path d="M4 16c0 1.66 3.58 3 8 3s8-1.34 8-3"/><ellipse cx="12" cy="19" rx="8" ry="3"/></g></svg>';
  const decode = c => {
    try {
      return JSON.parse(atob(c));
    } catch (e) {
      return {};
    }
  };
  const toVisual = obj => {
    const o = {};
    Object.entries(obj || {}).forEach(([k, f]) => {
      o[k] = {
        key: k,
        type: (f.type || '').toUpperCase(),
        options: f.options || [],
        children: f.children ? toVisual(f.children) : {}
      };
    });
    return o;
  };
  const toJson = obj => {
    const o = {};
    Object.values(obj).forEach(f => {
      const k = f.key || 'temp_' + uid();
      o[k] = {
        type: f.type.toUpperCase()
      };
      if (f.type === 'SELECT') o[k].options = [...f.options];
      if (f.type === 'OBJECT' || f.type === 'ARRAY') o[k].children = toJson(f.children || {});
    });
    return o;
  };
  const label = {
    textTransform: 'uppercase',
    font: '600 12px/18px var(--font-sans)',
    color: 'var(--gray-500)'
  };
  function SoftButton({
    children,
    onClick,
    small
  }) {
    const [h, setH] = useState(false);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        height: small ? 28 : 32,
        padding: small ? '0 12px 0 8px' : '0 14px 0 12px',
        border: 0,
        borderRadius: 'var(--radius-lg)',
        background: h ? 'var(--brand-50)' : 'var(--brand-25)',
        color: 'var(--brand-600)',
        font: (small ? '600 12px/18px' : '600 14px/20px') + ' var(--font-sans)',
        cursor: 'pointer',
        transition: 'background 0.15s'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: small ? 16 : 20
    }), children);
  }
  function FieldEditor({
    fields,
    onUpdate
  }) {
    const [errs, setErrs] = useState({});
    const need = (id, f) => {
      const ok = !!(f.key && f.key.trim());
      setErrs(e => ({
        ...e,
        [id]: !ok
      }));
      return ok;
    };
    return Object.entries(fields).map(([id, f]) => /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        borderLeft: '2.5px solid var(--gray-200)',
        borderRadius: 4,
        padding: '0 16px 4px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...label,
        flex: 1
      }
    }, "Field Key"), /*#__PURE__*/React.createElement("div", {
      style: {
        ...label,
        flex: 1
      }
    }, "Type"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Input, {
      size: "sm",
      placeholder: "Field Key",
      value: f.key,
      hasErrors: !!errs[id],
      messages: errs[id] ? ['Field Key is required'] : [],
      onChange: e => {
        f.key = e.target.value;
        if (errs[id]) need(id, f);
        onUpdate();
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Select, {
      height: 36,
      placeholder: "Select Type",
      options: FIELD_TYPES,
      value: f.type,
      onChange: v => {
        f.type = v;
        onUpdate();
      },
      style: {
        width: '100%'
      }
    }))), /*#__PURE__*/React.createElement("span", {
      role: "button",
      "aria-label": "Delete field",
      onClick: () => {
        delete fields[id];
        onUpdate();
      },
      style: {
        cursor: 'pointer',
        marginTop: 8,
        color: 'var(--gray-500)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash-03"
    }))), f.type === 'SELECT' && /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 8,
        marginBottom: 12,
        background: 'var(--gray-50)',
        padding: 12,
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: label
    }, "Dropdown Options"), /*#__PURE__*/React.createElement("span", {
      role: "button",
      onClick: () => {
        if (!need(id, f)) return;
        f.options.push('');
        onUpdate();
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        color: 'var(--brand-600)',
        font: '700 12px/18px var(--font-sans)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }), "Add")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, !f.options.length && /*#__PURE__*/React.createElement("div", {
      style: {
        fontStyle: 'italic',
        color: 'var(--gray-400)',
        font: 'italic 500 14px/20px var(--font-sans)'
      }
    }, "No options defined"), f.options.map((o, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        height: 28,
        padding: '0 6px 0 10px',
        background: 'var(--gray-50)',
        border: '1px solid var(--gray-200)',
        borderRadius: 9999
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: o,
      placeholder: "Option",
      onChange: e => {
        f.options[i] = e.target.value;
        onUpdate();
      },
      style: {
        width: Math.max(48, o.length * 7 + 8),
        border: 0,
        outline: 'none',
        background: 'transparent',
        font: '500 12px/18px var(--font-sans)',
        color: 'var(--gray-700)',
        padding: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      role: "button",
      "aria-label": "Remove option",
      onClick: () => {
        f.options.splice(i, 1);
        onUpdate();
      },
      style: {
        display: 'flex',
        cursor: 'pointer',
        color: 'var(--gray-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x-close",
      size: 12
    })))))), (f.type === 'OBJECT' || f.type === 'ARRAY') && /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 6,
        borderBottom: '1px solid var(--gray-200)',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4,
        font: '600 13px/20px var(--font-sans)',
        color: 'var(--gray-500)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex'
      },
      dangerouslySetInnerHTML: {
        __html: NESTED_SVG
      }
    }), "Nested Fields"), /*#__PURE__*/React.createElement(SoftButton, {
      small: true,
      onClick: () => {
        if (!need(id, f)) return;
        f.children['c_' + uid()] = {
          key: '',
          type: 'TEXT',
          options: [],
          children: {}
        };
        onUpdate();
      }
    }, "Add Child Field")), !Object.keys(f.children).length && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 0 8px 8px',
        borderLeft: '2px dashed var(--gray-300)',
        color: 'var(--gray-400)',
        font: '400 14px/20px var(--font-sans)'
      }
    }, "Empty Container. Add a child field."), /*#__PURE__*/React.createElement(FieldEditor, {
      fields: f.children,
      onUpdate: onUpdate
    }))));
  }
  function TemplateRuleDetail({
    item,
    types,
    onClose,
    onSaved,
    notify
  }) {
    const init = useRef(null);
    if (!init.current) {
      const dec = item.id && item.content ? decode(item.content) : null;
      init.current = {
        entity_name: item.entity_name || '',
        visual: dec ? toVisual(dec.fields) : {},
        json: dec ? JSON.stringify({
          entity_type: item.entity_name,
          fields: dec.fields
        }, null, 2) : ''
      };
    }
    const [entity, setEntity] = useState(init.current.entity_name);
    const [visual, setVisual] = useState(init.current.visual);
    const [json, setJson] = useState(init.current.json);
    const [tab, setTab] = useState(0);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [, bump] = useState(0);
    const sync = (vis = visual, ent = entity) => {
      setJson(JSON.stringify({
        entity_type: ent,
        fields: toJson(vis)
      }, null, 2));
      bump(n => n + 1);
    };
    const addField = () => {
      visual['f_' + uid()] = {
        key: '',
        type: 'TEXT',
        options: [],
        children: {}
      };
      sync();
    };
    const onJson = v => {
      setJson(v);
      try {
        setVisual(toVisual(JSON.parse(v).fields || {}));
      } catch (e) {/* keep visual until JSON parses */}
    };
    const save = () => {
      const bad = !entity || !String(entity).trim();
      setErr(bad);
      if (bad) return;
      let content = '';
      try {
        if (json) content = btoa(JSON.stringify(JSON.parse(json)));
      } catch (e) {
        notify({
          type: 'error',
          title: 'Error',
          message: 'Invalid JSON code'
        });
        return;
      }
      setLoading(true);
      setTimeout(() => {
        onSaved({
          ...item,
          id: item.id || 'tr_' + Date.now(),
          entity_name: entity,
          content
        });
      }, 600);
    };
    const header = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 35,
        font: '600 17px/24px var(--font-sans)',
        color: 'var(--gray-900)'
      }
    }, /*#__PURE__*/React.createElement("span", null, item.id ? item.entity_name : 'Create New Rule'), /*#__PURE__*/React.createElement(CloseButton, {
      onClick: onClose
    }));
    const tabs = [{
      label: 'Visual Editor',
      icon: 'dotpoints-01'
    }, {
      label: 'JSON Code',
      icon: 'code'
    }];
    const empty = !Object.keys(visual).length;
    return /*#__PURE__*/React.createElement(Popup, {
      width: "lg",
      header: header,
      contentStyle: {
        padding: '20px 0 0',
        maxHeight: '75vh'
      },
      onClose: onClose,
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: onClose
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        disabled: loading,
        loading: loading,
        onClick: save
      }, "Save"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--text-form-label)',
        color: 'var(--gray-700)',
        paddingBottom: 8
      }
    }, "Entity Name ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--error-700)'
      }
    }, "*")), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select Type",
      clearable: true,
      options: types.map(t => ({
        value: t.name,
        label: t.name
      })),
      value: entity || null,
      onChange: v => {
        setEntity(v || '');
        setErr(!v);
        sync(visual, v || '');
      },
      hasErrors: err,
      messages: err ? ['Field is required'] : [],
      style: {
        width: '100%'
      }
    })), /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      style: {
        display: 'flex',
        gap: 12,
        padding: '16px 24px 0',
        borderBottom: '1.5px solid var(--gray-200)'
      }
    }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
      key: t.label,
      role: "tab",
      "aria-selected": tab === i,
      type: "button",
      onClick: () => setTab(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        padding: '0 4px 12px',
        marginBottom: -1.5,
        border: 0,
        borderBottom: '2px solid ' + (tab === i ? 'var(--brand-600)' : 'transparent'),
        background: 'transparent',
        font: '600 14px/20px var(--font-sans)',
        color: tab === i ? 'var(--brand-700)' : 'var(--gray-500)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      style: i === 1 ? {
        transform: 'scale(1.2)'
      } : undefined
    }), t.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--gray-100)',
        padding: 24,
        height: '27rem',
        boxSizing: 'border-box'
      }
    }, tab === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--gray-300)',
        borderRadius: 'var(--radius-lg)',
        padding: 24,
        height: '24rem',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textTransform: 'uppercase',
        color: 'var(--gray-500)',
        font: '600 14px/20px var(--font-sans)'
      }
    }, "Fields Configuration"), /*#__PURE__*/React.createElement(SoftButton, {
      onClick: addField
    }, "Add Root Field")), empty ? /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px dashed var(--gray-300)',
        borderRadius: 'var(--radius-md)',
        padding: '120px 32px',
        color: 'var(--gray-400)',
        textAlign: 'center',
        font: '400 16px/24px var(--font-sans)'
      }
    }, "No fields defined. Click \u201CAdd Root Field\u201D to get started.") : /*#__PURE__*/React.createElement("div", {
      style: {
        height: 'calc(100% - 50px)',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement(FieldEditor, {
      fields: visual,
      onUpdate: () => sync()
    }))), tab === 1 && /*#__PURE__*/React.createElement("textarea", {
      value: json,
      onChange: e => onJson(e.target.value),
      spellCheck: false,
      style: {
        width: '100%',
        height: '24rem',
        boxSizing: 'border-box',
        padding: 16,
        border: '1px solid var(--gray-300)',
        borderRadius: 'var(--radius-lg)',
        background: '#fff',
        font: '400 14px/20px ui-monospace, Menlo, monospace',
        color: 'var(--gray-900)',
        resize: 'none',
        outline: 'none'
      }
    })));
  }
  window.TemplateRuleDetail = TemplateRuleDetail;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clm-admin/TemplateRuleDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/clm-admin/data.js
try { (() => {
// Mock data for the CLM Admin kit. Shapes follow hk-clm-ui services (snake_case fields, UPPER_SNAKE statuses).
(function () {
  const DOCS = ['Lease Documents', 'Guest Welcome Letters (Updated)', '226 - WA', 'Application', 'Pet Addendum'];
  const pad = n => String(n).padStart(10, '0');
  const fmtD = d => d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  const fmtT = d => d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const base = new Date('2026-09-23T16:03:00');
  const requests = Array.from({
    length: 158
  }, (_, i) => {
    const start = new Date(base.getTime() - i * 2.7 * 3600 * 1000 - i % 5 * 31 * 60000);
    const fin = new Date(start.getTime() + 60000 * (1 + i % 3));
    const signed = i % 3 === 2 || i % 7 === 4;
    const status = i % 23 === 9 ? 'FAILED' : i % 31 === 5 ? 'IN_PROGRESS' : i % 41 === 7 ? 'NOT_STARTED' : 'SENT';
    const signing = status === 'FAILED' || status === 'NOT_STARTED' ? 'NON_SIGNING' : signed ? 'SIGNED' : i % 11 === 6 ? 'PARTIALLY_SIGNED' : 'PENDING_SIGN';
    return {
      session_id: 'ses_' + (3988 - i),
      reference_number: 'TKCLM' + pad(3988 - i),
      status,
      ext_ref_no: 'EV0600000001' + String(680 - i % 9 * 7).padStart(4, '0'),
      document_name: DOCS[i % 13 === 4 ? 1 : i % 17 === 8 ? 2 : 0],
      signing_status: signing,
      stamped_pdf: status === 'SENT' || status === 'COMPLETED',
      signed_pdf: signing === 'SIGNED',
      started_at: [fmtD(start), fmtT(start)],
      finished_at: status === 'IN_PROGRESS' || status === 'NOT_STARTED' ? null : [fmtD(fin), fmtT(fin)],
      expired_at: i === 1 || i === 12 ? [fmtD(fin), fmtT(fin)] : null,
      account_id: i % 4 === 0 ? 'acc_2' : 'acc_1'
    };
  });
  const tg = ['226 - WA', 'accounting demo', 'Clone of APPLICATION', 'Clone of Guest Welcome Letters Updated', 'Create Template Group', 'Gresa Tests', 'Guest Welcome Letters (Updated)', 'Guest Welcome Letters (Updated)1', 'Lease Documents', 'Move Out Checklist', 'Parking Addendum', 'Pet Addendum', 'Renewal Offer', 'Utility Addendum'];
  window.CLM_DATA = {
    requests,
    summary: {
      not_started: 3,
      in_progress: 24,
      completed: 592,
      sent: 2633,
      failed: 407
    },
    accounts: [{
      id: 'acc_1',
      name: 'Meridian Properties',
      code: 'MERIDIAN',
      is_active: true
    }, {
      id: 'acc_2',
      name: 'Harborview LLC',
      code: 'HARBORVIEW',
      is_active: true
    }, {
      id: 'acc_3',
      name: 'Northgate Living',
      code: 'NORTHGATE',
      is_active: true
    }, {
      id: 'acc_4',
      name: 'Pinecrest Legacy',
      code: 'PINECREST',
      is_active: false
    }],
    templateGroups: tg.map((n, i) => ({
      id: 'tg_' + i,
      name: n,
      code: n.toUpperCase().replace(/[^A-Z0-9]+/g, '_'),
      description: i % 2 ? '' : 'Documents generated for ' + n.toLowerCase() + '.',
      template_group_type_id: i % 3 ? 'tt_2' : 'tt_1',
      is_active: i !== 9,
      templates: (i % 5 === 3 ? [] : ['Lease Agreement', 'Guarantor Addendum', 'Pet Addendum', 'Parking Addendum', 'Move-In Checklist'].slice(0, 2 + i % 4)).map((t, j) => ({
        id: 'tpl_' + i + '_' + j,
        name: t,
        sort_order: j + 1,
        file_url: j === 3 && i % 2 ? '' : 'https://files.example/' + t.toLowerCase().replace(/[^a-z]+/g, '-') + '.docx',
        rule_expression: j % 2 === 0 ? '{"all":[{"field":"lease.type","op":"eq","value":"NEW"}]}' : null,
        tags: [[{
          code: 'guarantor'
        }, {
          code: 'co_signer'
        }], [{
          code: 'pet_addendum'
        }], [], [{
          code: 'parking'
        }, {
          code: 'utilities'
        }, {
          code: 'move_in'
        }]][j % 4]
      }))
    })),
    tags: ['guarantor', 'pet_addendum', 'auto_renew', 'parking', 'utilities', 'move_in', 'move_out', 'co_signer'].map((c, i) => ({
      id: 'tag_' + i,
      code: c,
      is_active: i !== 6
    })),
    templateRules: [{
      id: 'tr_0',
      entity_name: 'Lease',
      content: btoa(JSON.stringify({
        fields: {
          lease_type: {
            type: 'SELECT',
            options: ['NEW', 'RENEWAL', 'TRANSFER']
          },
          monthly_rent: {
            type: 'AMOUNT'
          },
          start_date: {
            type: 'DATE'
          },
          has_pets: {
            type: 'BOOL'
          },
          guarantors: {
            type: 'ARRAY',
            children: {
              name: {
                type: 'TEXT'
              },
              phone: {
                type: 'PHONE'
              }
            }
          }
        }
      }))
    }, {
      id: 'tr_1',
      entity_name: 'Application',
      content: btoa(JSON.stringify({
        fields: {
          applicant_count: {
            type: 'NUMERIC'
          },
          state: {
            type: 'STATE_LIST'
          },
          employer: {
            type: 'OBJECT',
            children: {
              name: {
                type: 'TEXT'
              },
              annual_income: {
                type: 'AMOUNT'
              }
            }
          }
        }
      }))
    }],
    templateGroupTypes: [{
      id: 'tt_1',
      name: 'Application',
      code: 'APPLICATION'
    }, {
      id: 'tt_2',
      name: 'Lease',
      code: 'LEASE'
    }, {
      id: 'tt_3',
      name: 'Renewal',
      code: 'RENEWAL'
    }, {
      id: 'tt_4',
      name: 'Move Out',
      code: 'MOVE_OUT'
    }],
    fonts: [{
      id: 'f_1',
      display_name: 'Dancing Script',
      css_family: 'Dancing Script',
      is_active: true
    }, {
      id: 'f_2',
      display_name: 'Great Vibes',
      css_family: 'Great Vibes',
      is_active: true
    }, {
      id: 'f_3',
      display_name: 'Homemade Apple',
      css_family: 'Homemade Apple',
      is_active: true
    }, {
      id: 'f_4',
      display_name: 'Pacifico',
      css_family: 'Pacifico',
      is_active: false
    }]
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/clm-admin/data.js", error: String((e && e.message) || e) }); }

// ui_kits/signing-portal/SigningPortalApp.jsx
try { (() => {
const {
  useState
} = React;
const {
  Button,
  Icon,
  Toast,
  Popup,
  Input
} = window.CLMDesignSystem_e371e1;
const FIELDS = [{
  id: 1,
  label: 'Tenant signature',
  x: 80,
  y: 120,
  w: 220,
  h: 56,
  signed: true,
  party: 'Tenant'
}, {
  id: 2,
  label: 'Tenant initials',
  x: 340,
  y: 120,
  w: 100,
  h: 56,
  signed: true,
  party: 'Tenant'
}, {
  id: 3,
  label: 'Guarantor signature',
  x: 80,
  y: 320,
  w: 220,
  h: 56,
  signed: false,
  party: 'Guarantor'
}, {
  id: 4,
  label: 'Date',
  x: 340,
  y: 320,
  w: 120,
  h: 56,
  signed: false,
  party: 'Guarantor'
}];
function Field({
  field,
  onSign
}) {
  const [hover, setHover] = useState(false);
  if (field.signed) {
    return React.createElement('div', {
      style: {
        position: 'absolute',
        left: field.x,
        top: field.y,
        width: field.w,
        height: field.h,
        border: '1px solid var(--success-200)',
        background: 'var(--success-50)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        fontFamily: 'var(--font-sans)',
        boxSizing: 'border-box'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'cursive',
        fontSize: 20,
        color: 'var(--gray-900)'
      }
    }, 'J. Rivera'));
  }
  return React.createElement('div', {
    onClick: () => onSign(field.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'absolute',
      left: field.x,
      top: field.y,
      width: field.w,
      height: field.h,
      border: '2px dashed var(--warning-700)',
      background: hover ? 'var(--warning-50)' : '#fff',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      transition: 'background var(--transition-color)'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--warning-700)',
      fontWeight: 700
    }
  }, 'Sign here'), React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--warning-700)'
    }
  }, field.label));
}
function SignModal({
  field,
  onClose,
  onApply
}) {
  const [name, setName] = useState('');
  return React.createElement(Popup, {
    width: 'sm',
    title: field.label,
    onClose,
    actions: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: 'secondary',
      onClick: onClose
    }, 'Cancel'), React.createElement(Button, {
      variant: 'primary',
      disabled: !name,
      onClick: () => onApply(name)
    }, 'Apply signature'))
  }, React.createElement(Input, {
    label: 'Type your name',
    value: name,
    onChange: e => setName(e.target.value),
    style: {
      font: '24px/32px cursive'
    }
  }));
}
function Portal() {
  const [fields, setFields] = useState(FIELDS);
  const [active, setActive] = useState(null);
  const [toast, setToast] = useState(false);
  const remaining = fields.filter(f => !f.signed).length;
  function apply(name) {
    setFields(fields.map(f => f.id === active ? {
      ...f,
      signed: true
    } : f));
    setActive(null);
    if (remaining - 1 === 0) {
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    }
  }
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      background: 'var(--gray-100)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement('div', {
    style: {
      background: 'var(--navy)',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      color: '#fff',
      fontWeight: 900,
      fontSize: 20
    }
  }, 'CLM'), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      padding: '32px 0 100px'
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      width: 600,
      height: 480,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      top: 24,
      left: 80,
      font: 'var(--text-section-title)',
      color: 'var(--text-primary)'
    }
  }, 'Residential Lease Agreement'), fields.map(f => React.createElement(Field, {
    key: f.id,
    field: f,
    onSign: () => setActive(f.id)
  })))), React.createElement('div', {
    style: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#fff',
      borderTop: '1px solid var(--gray-200)',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      boxSizing: 'border-box'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-body-strong)',
      color: remaining ? 'var(--warning-700)' : 'var(--success-700)'
    }
  }, remaining ? remaining + ' fields remaining' : 'All fields signed'), React.createElement(Button, {
    variant: 'primary',
    disabled: remaining > 0
  }, 'Complete signing')), active && React.createElement(SignModal, {
    field: fields.find(f => f.id === active),
    onClose: () => setActive(null),
    onApply: apply
  }), toast && React.createElement('div', {
    style: {
      position: 'fixed',
      top: 80,
      right: 24,
      zIndex: 200
    }
  }, React.createElement(Toast, {
    type: 'success',
    title: 'All fields signed',
    message: 'Ready to complete signing.',
    onClose: () => setToast(false)
  })));
}
window.SigningPortalApp = Portal;
if (document.querySelector('script[src$="SigningPortalApp.jsx"]')) ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Portal));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/signing-portal/SigningPortalApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.CustomStatsCard = __ds_scope.CustomStatsCard;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ListCard = __ds_scope.ListCard;

__ds_ns.StatsCard = __ds_scope.StatsCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.DateRangeInput = __ds_scope.DateRangeInput;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.FilterSelect = __ds_scope.FilterSelect;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ColorMap = __ds_scope.ColorMap;

__ds_ns.StatusTag = __ds_scope.StatusTag;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.UploadFile = __ds_scope.UploadFile;

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.SearchFilterBar = __ds_scope.SearchFilterBar;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.ConfirmDeletePopup = __ds_scope.ConfirmDeletePopup;

__ds_ns.CloseButton = __ds_scope.CloseButton;

__ds_ns.Popup = __ds_scope.Popup;

__ds_ns.Toast = __ds_scope.Toast;

})();
