import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Некорректный формат почты').isEmail(),
  body('password', 'Пароль должен быть больше 5 символов').isLength({ min: 5 }),
];
export const registerValidation = [
  body('email', 'Некорректный формат почты').isEmail(),
  body('password', 'Пароль должен быть больше 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя').isLength({ min: 3 }),
  body('avatarUrl', 'Некорректная ссылка на аватарку').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тэгов').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];
