package com.isleslie.marble.domain.convert;

import com.isleslie.marble.domain.dto.RegisterDTO;
import com.isleslie.marble.domain.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserConvert {

    UserConvert INSTANCE = Mappers.getMapper(UserConvert.class);

    User toUser(RegisterDTO dto);

}
