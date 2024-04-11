import React, { Suspense } from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import Loading from '../components/Loading';
const Header = React.lazy(() => import('../components/Header'));

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

const CustomColorPicker = ({ id, mode }) => <ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} />;

const ColorPicker = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Suspense fallback={<Loading/>}>
      <Header category="App" title="Color Picker" />
    </Suspense>
    <div className="text-center bg-white rounded-3xl pb-10">
      <div id="preview"  />
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
          <CustomColorPicker id="inline-palette" mode="Palette" />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
          <CustomColorPicker id="inline-picker" mode="Picker" />
        </div>
      </div>
    </div>
  </div>
);

export default ColorPicker;