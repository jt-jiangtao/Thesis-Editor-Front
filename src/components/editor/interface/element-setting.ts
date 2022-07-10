interface FontSetting {
    // with tag
    // 粗体
    bold ?: boolean
    // 斜体
    italics ?: boolean
    // 下划线
    underline ?: boolean
    // 删除线
    del ?: boolean

    // TODO 字体
    family?: string
    // TODO 字号
    size ?: string
    // TODO 颜色
    color ?: string
    // TODO 背景颜色
    backgroundColor ?: string

    // 字体位置: 默认、上标。下标
    position ?: 'normal' | 'top' | 'bottom'
}

interface DecorationSetting {
    // 缩进
    indent ?: number
    // 行高
    lineHeight ?: number
    // 对齐方式: 左对齐、右对齐、居中、两端对齐、分散
    align ?: 'left' | 'right' | 'center' | 'space-between' | 'scattered'
}

interface DistanceSetting {
    // 上边距
    topDistance ?: number
    // 下边距
    bottomDistance ?: number
}

export interface ElementSetting{
    // 字体相关(作用在leaf上面)
    font?: FontSetting
    // 元素修饰相关(作用在element上面)
    decoration ?: DecorationSetting
    // 元素距离相关(作用在element上面)
    distance ?: DistanceSetting
}
