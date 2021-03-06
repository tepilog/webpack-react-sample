import { useState } from 'react'

/**
 *  ローカルストレージの値とuseStateの値を同時に処理するカスタムフック。
 *    useStateと同じように使いながら、localStorageへの保存も可能。
 *  引数
 *    init: string・・・初期値。useStateの初期値と同じ。
 *    key: string・・・localStorageに保存する際のキー
 *  戻り値
 *    useStateの戻り値と同じ型
 */
export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
  // ローカルストレージの値を取得。取得できない場合は引数の初期値を利用。
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

  // useStateの関数とlocalStorageの保存を組み合わせた関数
  const setValueWithStorage = (nextValue: string): void => {
    setValue(nextValue)
    localStorage.setItem(key, nextValue)
  }

  return [value, setValueWithStorage]
}
