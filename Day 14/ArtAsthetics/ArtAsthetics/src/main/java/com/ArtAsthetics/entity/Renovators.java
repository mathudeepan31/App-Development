package com.ArtAsthetics.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name="Renovators")
public class Renovators {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    int rid;
    String name;
    String phno;
    String dtype;
}
