package com.yupi.yupicturebackend.exception;

import lombok.Getter;

@Getter
public class BusinessException extends RuntimeException {

    /**
     * 错误码
     */
    private final int code;

    //直接传错误码和信息
    public BusinessException(int code, String message) {
        super(message);
        this.code = code;
    }

    //使用 ErrorCode 中的默认错误码和信息
    public BusinessException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.code = errorCode.getCode();
    }

    //使用 ErrorCode 的错误码，但自定义错误信息
    public BusinessException(ErrorCode errorCode, String message) {
        super(message);
        this.code = errorCode.getCode();
    }

}

