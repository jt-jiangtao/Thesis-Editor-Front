interface ISizeMapping{
    type: string
    name: string
    size: number
    unit: string
}

export const sizeMapping :　{ [key: string]: ISizeMapping } = {
  '0': {
    type: '0',
    name: '初号',
    size: 42,
    unit:　'pt'
  },
  'small-0': {
    type: 'small-0',
    name: '小初',
    size: 36,
    unit:　'pt'
  },
  '1': {
    type: '1',
    name: '一号',
    size: 26,
    unit:　'pt'
  },
  'small-1': {
    type: 'small-1',
    name: '小一',
    size: 24,
    unit:　'pt'
  },
  '2': {
    type: '2',
    name: '二号',
    size: 22,
    unit:　'pt'
  },
  'small-2': {
    type: 'small-2',
    name: '小二',
    size: 18,
    unit:　'pt'
  },
  '3': {
    type: '3',
    name: '三号',
    size: 16,
    unit:　'pt'
  },
  'small-3': {
    type: 'small-3',
    name: '小三',
    size: 15,
    unit:　'pt'
  },
  '4': {
    type: '4',
    name: '四号',
    size: 14,
    unit:　'pt'
  },
  'small-4': {
    type: 'small-4',
    name: '小四',
    size: 12,
    unit:　'pt'
  },
  '5': {
    type: '5',
    name: '五号',
    size: 10.5,
    unit:　'pt'
  },
  'small-5': {
    type: 'small-5',
    name: '小五',
    size: 9,
    unit:　'pt'
  },
  '6': {
    type: '6',
    name: '六号',
    size: 7.5,
    unit:　'pt'
  },
  'small-6': {
    type: 'small-6',
    name: '小六',
    size: 6.5,
    unit:　'pt'
  },
  '7': {
    type: '7',
    name: '七号',
    size: 5.5,
    unit:　'pt'
  },
  '8': {
    type: '8',
    name: '八号',
    size: 5,
    unit:　'pt'
  },
}
