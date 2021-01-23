# React Simple AdSense
It is a simple Google AdSense component for React

## Getting Started

### Installation
```
yarn add react-simple-adsense
```
### Usage
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleAdSense from 'react-simple-adsense';

ReactDOM.render(
  <GoogleAdSense 
    html={'<ins class="adsbygoogle"\n' +
        'style="display:inline-block;width:728px;height:90px"\n' +
        'data-ad-client="YOUT_CLIENT_ID"\n' +
        'data-ad-slot="YOUR_AD_SLOT"></ins>'}
  />,
  document.getElementById('root')
);
```
## Required Property
<table>
  <thead>
    <tr>
      <td>Property Name</td>
      <td>Type</Td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>html</td>
      <td>string</td>
      <td>Ins tag code within Google AdSense advertising unit code</td>
    </tr>
  </tbody>
</table>

## License
This project is licensed under the MIT License - see the ``LICENSE.md`` file for details
