/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { SimulatorDataTypes } from '../../store/ducks/SimulatorData/types';

interface AssetOptionType {
  title: string;
}

export default function SelectAsset() {
  const { assets, asset } = useSelector((state: ApplicationState) => state.simulatorData);

  const dispatch = useDispatch();
  const [value, setValue] = useState({
    title: asset.title || assets[0].title,
  });

  const defaultProps = {
    options: assets,
    getOptionLabel: (option: AssetOptionType) => option.title,
  };

  // eslint-disable-next-line no-shadow
  function setAsset(value: any) {
    if (value !== null) {
      setValue(value);
      dispatch({
        type: SimulatorDataTypes.SET_ASSET,
        payload: {
          key: value.key,
          title: value.title,
        },
      });
    }
  }

  return (
    <div style={{
      width: '100%',
      alignSelf: 'center',
    }}
    >
      <Autocomplete
        {...defaultProps}
        value={value}
        id="open-on-focus"
        onChange={(event: any, newValue: any) => {
          setAsset(newValue);
        }}
        openOnFocus
        renderInput={(params) => <TextField {...params} label="Selecione o ativo" margin="normal" />}
      />
    </div>
  );
}
