import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { setLocale } from 'yup'

const FORMS = {
  en: {
    mixed: {
      default: 'Invalid',
      required: 'Required',
      notType: ({ type = '' }) =>
        ({
          number: 'Please enter a valid number',
          date: 'Please enter a valid date'
        }[type])
    },
    number: {
      min: 'Should be at least ${min}',
      max: 'Should be at most ${max}',
      positive: 'Please enter a positive number',
      integer: 'Please enter an integer'
    },
    string: {
      email: 'Please enter a valid email',
      phone: 'Please enter a valid phone number',
      phoneEmail: 'Please enter a valid email or phone number'
    },
    array: {
      min: 'Please, add at least one item'
    }
  },
  zh: {
    mixed: {
      default: '无效',
      required: '必填',
      notType: ({ type = '' }) =>
        ({
          number: '请输入合格数字',
          date: '请出入有效日期'
        }[type])
    },
    number: {
      min: '必须多余 ${min}',
      max: '必须少于 ${max}',
      positive: '请输入正数',
      integer: '请输入整数'
    },
    string: {
      email: '请输入有效电子邮件',
      phone: '请输入有效的手机号码',
      phoneEmail: '请输入有效邮箱或手机号码'
    },
    array: {
      min: '请添加至少一个项目'
    }
  }
}

export default function useSetLocaleEvents(): void {
  const { locale, defaultLocale } = useRouter()

  useEffect(setLocaleEvents, [locale, defaultLocale])

  function setLocaleEvents(): void {
    if (locale === 'en' || locale === 'zh') {
      setLocale(FORMS[locale])
    }
  }
}
