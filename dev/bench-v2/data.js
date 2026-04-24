window.BENCHMARK_DATA = {
  "lastUpdate": 1777062083415,
  "repoUrl": "https://github.com/ramses-ramsesi/UltrafastSecp256k1",
  "entries": {
    "UltrafastSecp256k1 Performance": [
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "4d215c4d562a7808acae1def7f03d156b53b366a",
          "message": "feat(gpu): native schnorr_snark_witness_batch kernels on CUDA, OpenCL, Metal\n\nEliminates the last horizontal parity gap: all 16 GPU ABI operations are\nnow backed by native device kernels on every backend (no CPU fallbacks).\n\nCUDA:\n- Add SchnorrSnarkWitnessFlat struct + schnorr_snark_witness_device() to\n  cuda/include/schnorr.cuh (uses lift_x, tagged_hash_fast, be_bytes_to_ff_limbs)\n- Add schnorr_snark_witness_batch_kernel to cuda/src/secp256k1.cu\n- Add extern decl + schnorr_snark_witness_batch() override in gpu_backend_cuda.cu\n\nOpenCL:\n- Add SchnorrSnarkWitnessFlatOCL struct, schnorr_be32_lt_p/is_nonzero_lt_n\n  validators, schnorr_snark_witness_impl(), and schnorr_snark_witness_batch\n  kernel to opencl/kernels/secp256k1_extended.cl\n- Add ext_schnorr_snark_ kernel handle, update ensure_extended_kernels(),\n  add schnorr_snark_witness_batch() override in gpu_backend_opencl.cpp\n\nMetal:\n- Add schnorr_snark_witness_batch kernel to metal/shaders/secp256k1_kernels.metal\n  (inline r<p / s∈[1,n-1] validation, lift_x, tagged_hash_fast, ff-limbs)\n- Add schnorr_snark_witness_batch() override in gpu_backend_metal.mm\n\nDocs:\n- BACKEND_ASSURANCE_MATRIX.md: Y* → Y for schnorr_snark_witness_batch,\n  remove stale CPU-fallback footnote, update parity counts\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-24T11:38:17Z",
          "tree_id": "dfee5d81058a8d65ac665f54eb92e53cd2e8ed48",
          "url": "https://github.com/ramses-ramsesi/UltrafastSecp256k1/commit/4d215c4d562a7808acae1def7f03d156b53b366a"
        },
        "date": 1777062081861,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1054.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1430.2,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8491.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 35967.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 34677.6,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 39813,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1353.2,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 268.2,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 168.7,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 287.6,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1455.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 15331.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 81468.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 41628.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8518.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 10125.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 57711,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 41977.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 47344.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 189073.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 47268.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 167335.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 41833.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 755513.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 47219.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 667875.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 41742.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3032873.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 47388.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2683231.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 41925.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 5624036.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 43937.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 5271206.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 41181.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 7515573.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 39143.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 7161400.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 37299,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 162019,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 647781,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2587408.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 5168553.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 7756187.2,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2063.7,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 23844.5,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 46312,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 162,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 445.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 305.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 299.3,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 32436.6,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 98820.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 26581.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 74678.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 25100.7,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 483.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 513.7,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 477.3,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 15362,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 15303.3,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 52156.9,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 15891,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1102.5,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 47957.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 47421.5,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 19766.5,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 27104.1,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1505.6,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 136653.8,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 164741.9,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 164601.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 56858,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 82596.3,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1199,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2279.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1237.7,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 163.1,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 281,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 41140,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 19573.2,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 21973.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 38549.6,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3076.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 23560.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 43563,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 419677.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 444552,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 401254.5,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 70699.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 50790,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 46269.1,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 97709.5,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 121533.8,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 27440650.7,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 3298021.2,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 38576,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 57244.1,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 25257.9,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 71647,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 71892.4,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 50081.3,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 49616.1,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 95065.2,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 176156.8,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 89852.1,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 63190.5,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1129,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 114052.2,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 94394.1,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 34211.4,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 40411.5,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 275.3,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 365.3,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 101055.5,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1244275.7,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 20119,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 20423.5,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1479.8,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2970736.2,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1228.4,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1499.6,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 882.5,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 154.2,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2754.9,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 3044.9,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 96775.7,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 70094.9,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1164.1,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 1148.6,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 849.7,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 879.6,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 342646.3,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 1029.7,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 2097,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 3148.1,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 2094.2,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}